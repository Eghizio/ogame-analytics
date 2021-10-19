import { useQuery } from "react-query";
import { useLocalStorage } from "_hooks/useLocalStorage";
import { useAuth } from "_context/AuthProvider";
import { getJSON } from "_utils/getJSON";
import { ENDPOINTS } from "_constants/endpoints";
import { OGameAPI } from "_types/api";


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
