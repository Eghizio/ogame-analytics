import { useQueries, UseQueryResult } from "react-query";
import { useOGameAPI } from "_hooks/useOGameAPI";
import { getJSON } from "_utils/getJSON";
import { ENDPOINTS } from "_constants/endpoints";
import { OGameAPI } from "_types/api";


export const useServersData = () => {
    const { data } = useOGameAPI("universes");

    return useQueries(data?.universes.map(({ id }) => ({
        queryKey: ["universeName", id],
        queryFn: () =>  getJSON<OGameAPI["serverData"]>(`${ENDPOINTS.serverData}?serverID=${id}`),
        enabled: !!data?.universes
    })) ?? []) as UseQueryResult<OGameAPI["serverData"], unknown>[];
};
