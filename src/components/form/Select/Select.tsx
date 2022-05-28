import { NextPage } from "next";
import { UseFormRegister } from "react-hook-form";
import { Typography } from "@components";
import { useAppSelector } from "@store";

interface Props {
	label: string;
	list: any;
	register: UseFormRegister<any>;
}

const Select: NextPage<Props> = ({ label, list, register }) => {
	const { radius } = useAppSelector((state) => state.theme);

	return (
		<div className="flex flex-col space-y-1">
			<Typography
				variant="h6"
				element="label"
				htmlFor={label.replace(/\s/g, "")}
			>
				{label}
			</Typography>

			<select
				id={label.replace(/\s/g, "")}
				className={`border border-gray-300 p-3 ${radius}`}
				{...register(label, { required: true })}
			>
				{(Object.keys(list) as Array<keyof typeof list>).map((key) => (
					<option value={list[key]}>{key}</option>
				))}
			</select>
		</div>
	);
};

export default Select;
