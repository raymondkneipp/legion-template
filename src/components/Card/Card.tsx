import { NextPage } from "next";
import Image from "next/image";
import { Typography } from "@components";
import { useAppSelector } from "@store";

interface Props {
	image: string;
	date: string;
	title: string;
	content: string;
}

const Card: NextPage<Props> = ({ image, date, title, content }) => {
	const { radius } = useAppSelector((state) => state.theme);

	return (
		<div className={`shadow-md flex flex-col h-full ${radius}`}>
			<div className={`h-60 relative rounded-b-none overflow-hidden ${radius}`}>
				<Image
					loader={(src) => `http://localhost:3000/${src}`}
					unoptimized={true}
					src={`img/${image}`}
					alt="CHANGE ME"
					layout="fill"
					objectFit="cover"
					objectPosition="top"
				/>
			</div>
			<div className="p-6 space-y-6 flex flex-col flex-1">
				<Typography variant="h3">{title}</Typography>
				<div className="flex-1 max-h-36 overflow-hidden">
					<Typography variant="p">{content}</Typography>
				</div>

				<Typography variant="p" color="primary">
					{date}
				</Typography>
			</div>
		</div>
	);
};

export default Card;
