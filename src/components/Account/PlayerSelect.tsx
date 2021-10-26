import { ChangeEventHandler } from "react";
import { Select, SelectProps } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { OGameAPI } from "_types/api";
import { getJSON } from "_utils/getJSON";
import { ENDPOINTS } from "_constants/endpoints";

interface Props extends SelectProps {
	serverID: string;
	handleChange: (selectedValue: string) => void;
}

const getPlayers = (serverID: string) => getJSON<OGameAPI["players"]>(`${ENDPOINTS.players}?serverID=${serverID}`);

export const PlayerSelect = ({ serverID = "", handleChange, ...props }: Props) => {
	const { data, isLoading } = useQuery(["players", serverID], () => getPlayers(serverID), { enabled: !!serverID });
	console.log({ serverID, data });

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const selectedValue = event.target.options[event.target.selectedIndex].value;
		handleChange(selectedValue);
	};

	if (!serverID) return <Select placeholder="Please select an universe" {...props} />;
	if (isLoading) return <Select placeholder="Loading..." {...props} />;
	return (
		<Select onChange={handleSelectChange} {...props}>
			{data.players.map(({ id, name }) => {
				return (
					<option key={id} value={id}>
						{name}
					</option>
				);
			})}
		</Select>
	);
};
