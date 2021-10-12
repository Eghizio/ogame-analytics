import { getJSON } from "../utils/getJSON";
import { User } from "../types/auth";


// mocking stuff
const register = () => {};

const login = async (email: string, password: string) => {
    const response = await fetch("/api/mocks/auth", {
        method: "POST",
        body: JSON.stringify({ email, password })
    });
    const data: User = await response.json();

    return data;
};

const logout = () => {};

const getCurrentUser = async () => {
    const user = await getJSON<User>("/api/mocks/auth");
    
    return user;
};


export const Auth = {
    register,
    login,
    logout,
    getCurrentUser,
};