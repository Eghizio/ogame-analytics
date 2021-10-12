import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import NextLink from "next/link";
import { ChangeEventHandler, useEffect } from "react";
import { Dropdown } from "../components/Dropdown";
import { useProfile } from "../context/ProfileProvider";
import { useAPI } from "../hooks/useAPI";

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

const Settings = () => {
	const { message, serverID, setServerID } = useProfile();
	const [universesData] = useAPI<"universes">("universes", getUniverseIDs);

	useEffect(() => {
		if (!serverID && universesData)
			setServerID(universesData.newestServerID);
	}, [universesData]);

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (
		event
	) => {
		const selectedValue =
			event.target.options[event.target.selectedIndex].value;
		setServerID(selectedValue);
	};

	return (
		<Box>
			<Heading>Settings</Heading>
			<NextLink href="/">
				<Link>Home</Link>
			</NextLink>
			<Box>
				<Text>Message: {message}</Text>
				<Text>Selected Server ID: {serverID}</Text>
				{universesData && (
					<Select onChange={handleSelectChange} value={serverID}>
						{universesData.serverIDs.map(({ value, label }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</Select>
				)}
			</Box>
		</Box>
	);
};

export default Settings;
