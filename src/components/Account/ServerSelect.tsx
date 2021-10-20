import { ChangeEventHandler } from "react";
import { Select } from "@chakra-ui/select";
import { SelectProps, Spinner } from "@chakra-ui/react";
import { useUniverseNames } from "_hooks/useUniverseNames";

interface Props extends SelectProps {}

export const ServerSelect = (props: Props) => {
	const { data, isLoading } = useUniverseNames();

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const selectedValue = event.target.options[event.target.selectedIndex].value;
	};

	if (isLoading)
		return (
			<Select {...props}>
				<option></option>
			</Select>
		);

	return (
		<Select onChange={handleSelectChange} {...props}>
			{data &&
				data.map(({ id, name }) => (
					<option key={id} value={id}>
						{name}
					</option>
				))}
		</Select>
	);
};
