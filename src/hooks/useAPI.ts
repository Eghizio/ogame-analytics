import { Dispatch, useEffect, useState } from "react";
import { ENDPOINTS } from "../constants/endpoints";
import { KEYS } from "../constants/localStorageKeys";
import { OGameAPI } from "../types/api";
import { getJSON } from "../utils/getJSON";
import { useLocalStorage } from "./useLocalStorage";

export const useAPI= <T extends keyof OGameAPI>(key: T) => {
    const [localServerID] = useLocalStorage<string>(KEYS.SERVER_ID, "");
    const [data, setData] = useState<OGameAPI[T] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        (async () => {
			// todo: move to /api, abort controll, use RQ or SWR, context/hook maybe?
            // figure out typings for that (will prolly change with RQ/SWR)
            try{
                const responseData = (await getJSON(`${ENDPOINTS[key]}?serverID=${localServerID}`)) as OGameAPI[T];
                setData(responseData);
                
            }catch(error){
                setError(error);
            }finally{
                setIsLoading(false);
            }
			
		})();
    }, []);

    return { data, isLoading, error };
};