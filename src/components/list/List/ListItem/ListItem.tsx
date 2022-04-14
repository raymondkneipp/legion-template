import { NextPage } from "next";
import React from "react";
import { IconType } from "react-icons";
import { Typography } from "components/index";

interface Props {
	icon?: IconType;
}

const ListItem: NextPage<Props> = ({ icon, children }) => {
	if (icon) {
		return (
			<li className="flex items-center space-x-4">
				<Typography variant="p" element="span" color="primary">
					{React.createElement(icon, { size: 18 })}
				</Typography>
				<Typography variant="p" element="span">
					{children}
				</Typography>
			</li>
		);
	} else {
		return (
			<li>
				<Typography variant="p" element="span">
					{children}
				</Typography>
			</li>
		);
	}
};

export default ListItem;
