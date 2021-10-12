import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Auth } from "../api/auth";
import { User } from "../types/auth";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (ctx === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return ctx;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState<User | null>(null); // change into User / Guest user?
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const user = await Auth.getCurrentUser();
			if (user) setUser(user); // gotta fix prettier space after if :V
			setIsLoading(false);
		})();
	}, []);

	const value = useMemo(
		() => ({
			user,
		}),
		[]
	);

	if (isLoading) return <p>Loading...</p>;
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

interface AuthContextValue {
	user: User | null;
}
