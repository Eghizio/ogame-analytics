import Link from "next/link";
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
	const [universesData] = useAPI<"universes">(
		"universes",
		"179",
		getUniverseIDs
	);

	return (
		<div>
			<h1>Settings</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<p>Message: {message}</p>
			<p>Selected Server ID: {serverID}</p>
			<div>
				{universesData && (
					<Dropdown
						items={universesData.serverIDs}
						initialValue={serverID || universesData.newestServerID}
						onChange={setServerID}
					/>
				)}
			</div>
		</div>
	);
};

export default Settings;
