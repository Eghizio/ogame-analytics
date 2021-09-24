import { Dispatch, useEffect, useState } from "react";
import { ENDPOINTS } from "../constants/endpoints";
import { OGameAPI } from "../types/api";
import { getJSON } from "../utils/getJSON";

export const useAPI: useApiHook = (key, serverID = "", transformer = (args) => args) => {
    const [data, setData] = useState<any>(null); // any cause transformer
    
    useEffect(() => {
        (async () => {
			// todo: move to /api, abort controll, use RQ or SWR, context/hook maybe?
            // figure out typings for that (will prolly change with RQ/SWR)
            const responseData = (await getJSON(`${ENDPOINTS[key]}?serverID=${serverID}`)) as OGameAPI[typeof key];
			const transformedData = transformer(responseData);
			setData(transformedData);
		})();
    }, []);

    return [data, setData];
};

type useApiHook = <T extends keyof OGameAPI>(key: T, serverID: string, transformer?: (args?: any) => any) => [any, Dispatch<any>];