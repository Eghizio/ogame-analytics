import { useState } from "react";
import { KEYS } from "_constants/localStorageKeys";


export const  useLocalStorage = <T>(key: keyof typeof KEYS, initialValue: T) => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            
            setStoredValue(valueToStore);
            
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }catch(error){
            console.error(error);
        }
    };

    return [storedValue, setValue];
};