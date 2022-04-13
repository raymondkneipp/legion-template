import { NextPage } from "next";
import { UseFormRegister } from "react-hook-form";
import { Typography } from "../..";

interface Props {
	label: string;
	rows?: number;
	register: UseFormRegister<any>;
}

const Textarea: NextPage<Props> = ({ label, rows = 4, register }) => {
	return (
		<div className="flex flex-col space-y-1">
			<Typography
				variant="h6"
				element="label"
				htmlFor={label.replace(/\s/g, "")}
			>
				{label}
			</Typography>
			<textarea
				id={label.replace(/\s/g, "")}
				className="border border-gray-300 rounded-sm p-3 resize-y"
				required
				rows={rows}
				{...register(label, { required: true })}
			></textarea>
		</div>
	);
};

export default Textarea;
