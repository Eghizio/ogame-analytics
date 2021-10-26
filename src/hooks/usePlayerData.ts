import { useQuery } from "react-query";
import { ENDPOINTS } from "_constants/endpoints";
import { useAuth } from "_context/AuthProvider";
import { getJSON } from "_utils/getJSON";

export const usePlayerData = (playerID: string) => {
	const { user } = useAuth(); // change to some Profile hook

	return useQuery(
		["playerData", playerID],
		async () => {
			const urlQuery = `?id=${playerID}&serverID=${user.lastServerID}`;

			const data = await getJSON(`${ENDPOINTS.playerData}${urlQuery}`);

			return data;
		},
		{ enabled: !!user?.lastServerID }
	);
};
