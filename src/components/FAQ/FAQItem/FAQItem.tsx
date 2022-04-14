import { NextPage } from "next";
import { Typography } from "components/index";

interface Props {
	title: string;
	content: string;
}

const FAQItem: NextPage<Props> = ({ title, content }) => {
	return (
		<article className="space-y-2">
			<Typography variant="h4" color="primary">
				{title}
			</Typography>
			<Typography variant="p">{content}</Typography>
		</article>
	);
};

export default FAQItem;
