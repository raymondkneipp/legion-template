import { NextPage } from "next";
import Image from "next/image";
import { Container, Typography, Button } from "..";
import { format, parseISO } from "date-fns";
import Centered from "../layout/Centered/Centered";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
	title: string;
	date: string;
	thumbnail: string;
	content: string;
}

const Post: NextPage<Props> = ({ title, date, thumbnail, content }) => {
	return (
		<section className="my-36">
			<Container prose>
				<div className="space-y-6">
					<Button to="/news">
						<FaArrowLeft />
						<span>Back</span>
					</Button>
					<Typography variant="h1">{title}</Typography>
					<Typography variant="lead" color="primary">
						{format(parseISO(date), "EEEE, MMMM do, yyyy")}
					</Typography>
					<div className="overflow-hidden rounded">
						<Image
							src={`/${thumbnail}`}
							width="400"
							height="200"
							layout="responsive"
						/>
					</div>

					<div
						className="space-y-6"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</Container>
		</section>
	);
};

export default Post;
