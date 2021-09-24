import { ChangeEventHandler, useEffect } from "react";

interface Props {
	items: {
		label: string;
		value: string;
	}[];
	initialValue?: string;
	onChange: (selectedValue: string) => any;
}

export const Dropdown = ({ items = [], initialValue, onChange }: Props) => {
	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const selectedValue =
			event.target.options[event.target.selectedIndex].value;
		onChange(selectedValue);
	};

	useEffect(() => {
		onChange(initialValue);
	});

	return (
		<select onChange={handleChange} value={initialValue}>
			{items.map(({ label, value }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</select>
	);
};
