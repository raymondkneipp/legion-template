import { NextPage } from "next";
import React from "react";
import { IconType } from "react-icons";
import { Typography } from "@components/index";
import { useTheme } from "@store/ThemeContext";

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
}) => {
	const { color, radius } = useTheme();

	return (
		<article
			className={`flex space-x-6 ${
				stack ? "flex-col space-x-0 space-y-6" : ""
			} ${center ? "items-center text-center" : "items-start"}`}
		>
			<div className={`bg-${color}-700 inline-block p-4 ${radius}`}>
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
};

export default IconCard;
