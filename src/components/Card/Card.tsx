import { NextPage } from "next";
import Image from "next/image";
import { Typography } from "@components/index";
import { useTheme } from "@store/ThemeContext";

interface Props {
	image: string;
	date: string;
	title: string;
	content: string;
}

const Card: NextPage<Props> = ({ image, date, title, content }) => {
	const { radius } = useTheme();

	return (
		<div className={`shadow-md flex flex-col h-full ${radius}`}>
			<div className={`h-60 relative rounded-b-none overflow-hidden ${radius}`}>
				<Image src={image} alt={title} layout="fill" objectFit="cover" />
			</div>
			<div className="p-6 space-y-6 flex flex-col flex-1">
				<Typography variant="h3">{title}</Typography>
				<div
					className="flex-1 max-h-36 overflow-hidden"
					dangerouslySetInnerHTML={{ __html: content }}
				/>

				<Typography variant="p" color="primary">
					{date}
				</Typography>
			</div>
		</div>
	);
};

export default Card;
