import { NextPage } from "next";
import React from "react";
import { IconType } from "react-icons";
import { Typography } from "..";

interface Props {
	icon: IconType;
	title: string;
	content: string;
	stack?: boolean;
	light?: boolean;
	center?: boolean;
}

const IconCard: NextPage<Props> = ({
	icon,
	title,
	content,
	stack = false,
	light = false,
	center = false,
}) => (
	<article
		className={`flex space-x-6 ${stack ? "flex-col space-x-0 space-y-6" : ""} ${
			center ? "items-center text-center" : "items-start"
		}`}
	>
		<div className="bg-sky-700 rounded-sm inline-block p-4">
			{React.createElement(icon, { color: "white", size: "24" })}
		</div>
		<div className="space-y-2">
			<Typography variant="h3" color={light ? "light" : "primary"}>
				{title}
			</Typography>
			<Typography variant="p" color={light ? "light" : "dark"}>
				{content}
			</Typography>
		</div>
	</article>
);

export default IconCard;
