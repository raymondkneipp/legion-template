import { NextPage } from "next";
import React from "react";
import { IconType } from "react-icons";
import { Typography } from "../../../../components/index";

interface Props {
	icon?: IconType;
}

const DescriptionListItem: NextPage<Props> = ({ icon, children }) => {
	if (icon) {
		return (
			<dd className="flex items-center space-x-4">
				<Typography variant="p" element="span" color="primary">
					{React.createElement(icon, { size: 18 })}
				</Typography>
				<Typography variant="p" element="span">
					{children}
				</Typography>
			</dd>
		);
	} else {
		return (
			<dd>
				<Typography variant="p" element="span">
					{children}
				</Typography>
			</dd>
		);
	}
};

export default DescriptionListItem;
