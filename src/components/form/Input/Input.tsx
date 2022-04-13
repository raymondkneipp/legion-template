import { NextPage } from "next";
import { UseFormRegister } from "react-hook-form";
import { Typography } from "../..";

interface Props {
	label: string;
	type?: string;
	register: UseFormRegister<any>;
}

const Input: NextPage<Props> = ({ label, type = "text", register }) => {
	return (
		<div className="flex flex-col space-y-1">
			<Typography
				variant="h6"
				element="label"
				htmlFor={label.replace(/\s/g, "")}
			>
				{label}
			</Typography>
			<input
				type={type}
				id={label.replace(/\s/g, "")}
				className="border border-gray-300 rounded p-3"
				required
				{...register(label, { required: true })}
			/>
		</div>
	);
};

export default Input;
