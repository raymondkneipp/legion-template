import { NextPage } from "next";
import { IconType } from "react-icons";
import { Typography } from "../..";

interface Props {
	header: string;
}

const DescriptionList: NextPage<Props> = ({ header, children }) => (
	<dl className="space-y-4">
		<Typography variant="h6" element="dt">
			{header}
		</Typography>

		{children}
	</dl>
);

export default DescriptionList;
