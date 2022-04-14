import { NextPage } from "next";
import { Typography } from "../../../components/index";

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
