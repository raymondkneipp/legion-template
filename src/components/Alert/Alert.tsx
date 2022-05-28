import { NextPage } from "next";
import React from "react";
import { Typography } from "@components";
import { useAppSelector } from "@store";

type Variant = "danger" | "success";

interface Props {
	text: string;
	variant?: Variant;
}

const Alert: NextPage<Props> = ({ text, variant }) => {
	const { radius, color } = useAppSelector((state) => state.theme);
	let c;

	switch (variant) {
		case "danger":
			c = "red";
			break;
		case "success":
			c = "green";
			break;
		default:
			c = color;
	}

	return (
		<aside className={`bg-${c}-800 p-3 text-center ${radius}`}>
			<Typography variant="p" color="light">
				{text}
			</Typography>
		</aside>
	);
};

export default Alert;
