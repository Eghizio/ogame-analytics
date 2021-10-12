import { ChangeEventHandler, useEffect } from "react";
import { Select } from "@chakra-ui/select";
import { useOGameAPI } from "../../hooks/useOGameAPI";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const ServerSelect = () => {
	const { data, isLoading } = useOGameAPI<"universes">("universes");
	const [serverID, setServerID] = useLocalStorage("SERVER_ID", "");

	useEffect(() => {
		if (!serverID && data) setServerID(getUniverseIDs(data).newestServerID);
	}, [data]);

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const selectedValue = event.target.options[event.target.selectedIndex].value;
		setServerID(selectedValue);
	};

	// add loading and error state to useAPI
	if (isLoading) {
		return (
			<Select maxWidth="300px">
				<option>Trying to load universe IDs</option>
			</Select>
		);
	}

	return (
		<Select onChange={handleSelectChange} value={serverID} maxWidth="300px">
			{getUniverseIDs(data).serverIDs.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</Select>
	);
};

// gotta figure out some mappings
const getUniverseIDs = (data) => {
	if (!data) return data;
	//so unsafe lulz
	const serverIDs = data.universes.map((universe) => ({
		label: universe.id,
		value: universe.id,
	}));

	const newestServerID = serverIDs[serverIDs.length - 1].value;

	return { serverIDs, newestServerID };
};
