import { ChangeEventHandler } from "react";
import { Select, SelectProps } from "@chakra-ui/react";
import { useServersData } from "_hooks/useServersData";

interface Props extends SelectProps {
	handleChange: (selectedValue: string) => void;
}

export const ServerSelect = ({ handleChange, ...props }: Props) => {
	const serversDataQueries = useServersData();

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const selectedValue = event.target.options[event.target.selectedIndex].value;
		handleChange(selectedValue);
	};

	const isReady = serversDataQueries.every((query) => query.data);

	if (!isReady) return <Select placeholder="Loading..." {...props} />;
	return (
		<Select onChange={handleSelectChange} {...props}>
			{serversDataQueries.map(({ data: { number, name } }) => {
				return (
					<option key={number} value={number}>
						{name || number}
					</option>
				);
			})}
		</Select>
	);
};
