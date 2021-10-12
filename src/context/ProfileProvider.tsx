import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { KEYS } from "../constants/localStorageKeys";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ProfileContext = createContext<ProfileContextValue | undefined>(
	undefined
);

export const useProfile = () => {
	const ctx = useContext(ProfileContext);
	if (ctx === undefined) {
		throw new Error("useProfile must be used within a ProfileProvider");
	}

	return ctx;
};

export const ProfileProvider = ({ children }) => {
	const [serverID, setServerID] = useLocalStorage<string>(KEYS.SERVER_ID, "");
	// tbh we can remove it from here as we are keeping it in a localStorage, can retrieve it any time with this hook

	const value = { message: "hello there", serverID, setServerID };

	return (
		<ProfileContext.Provider value={value}>
			{children}
		</ProfileContext.Provider>
	);
};

interface ProfileContextValue {
	message: string;
	serverID: string;
	setServerID: Dispatch<SetStateAction<string>>;
}
