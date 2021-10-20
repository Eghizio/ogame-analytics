import { ChangeEventHandler } from "react";
import { Select, SelectProps } from "@chakra-ui/react";
import { useServersData } from "_hooks/useServersData";

interface Props extends SelectProps {}

export const ServerSelect = (props: Props) => {
	const serversDataQueries = useServersData();

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const selectedValue = event.target.options[event.target.selectedIndex].value;
	};

	if (!serversDataQueries.every((query) => query.data)) return <Select placeholder="Loading..." {...props} />;
	return (
		<Select onChange={handleSelectChange} {...props}>
			{serversDataQueries.map(({ data: { number, name } }) => {
				return (
					<option key={number} value={number}>
						{name}
					</option>
				);
			})}
		</Select>
	);
};
