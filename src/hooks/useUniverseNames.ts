import { useQuery } from "react-query";
import { useOGameAPI } from "_hooks/useOGameAPI";
import { getJSON } from "_utils/getJSON";
import { ENDPOINTS } from "_constants/endpoints";
import { OGameAPI } from "_types/api";


const getUniverseNames = (ids: string[]) => {
    return Promise.all(ids.map(id => getJSON<OGameAPI["serverData"]>(`${ENDPOINTS.serverData}?serverID=${id}`).then(({ name }) => ({ id, name }))));
};


// useQuery `select`
export const useUniverseNames = () => {
    const { data } = useOGameAPI("universes");

    return useQuery(
        ["universeNames"], 
        () => getUniverseNames(data.universes.map(uni => uni.id)),
        { enabled: !!data }
    );
};