import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";

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
	const [serverID, setServerID] = useState("");

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
