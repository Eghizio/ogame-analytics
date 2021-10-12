import { useQuery } from "react-query";
import { useLocalStorage } from "./useLocalStorage";
import { useAuth } from "../context/AuthProvider";
import { getJSON } from "../utils/getJSON";
import { ENDPOINTS } from "../constants/endpoints";
import { OGameAPI } from "../types/api";


export const useOGameAPI = <T extends keyof OGameAPI>(key: T) => {
    const { user } = useAuth();
    const [localServerID] = useLocalStorage<string>("SERVER_ID", ""); // move it to guest user data

    const serverID = user ? user.lastServerID : localServerID;
    
    return useQuery([key, serverID], async () => {

        const urlQuery = serverID ? `?serverID=${serverID}` : "";
        const URL = ENDPOINTS[key] + urlQuery;

        const data = await getJSON<OGameAPI[T]>(URL);

        return data;
    });
};
