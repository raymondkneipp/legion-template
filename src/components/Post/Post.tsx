import { NextPage } from "next";
import Image from "next/image";
import { Container, Typography, Button } from "@components";
import { format, parseISO } from "date-fns";
import { BsArrowLeft } from "react-icons/bs";
import { useAppSelector } from "@store";
import { useRouter } from "next/router";

interface Props {
	title: string;
	date: string;
	thumbnail: string;
	content: string;
}

const Post: NextPage<Props> = ({ title, date, thumbnail, content }) => {
	const { radius } = useAppSelector((state) => state.theme);
	const router = useRouter();

	return (
		<section className="my-36">
			<Container prose>
				<div className="space-y-6">
					<Button
						to="/news"
						onClick={(e: any) => {
							e.preventDefault();
							router.back();
						}}
					>
						<BsArrowLeft />
						<span>Back</span>
					</Button>
					<Typography variant="h1">{title}</Typography>
					<Typography variant="lead" color="primary">
						{format(parseISO(date), "EEEE, MMMM do, yyyy")}
					</Typography>
					<div className={`overflow-hidden ${radius}`}>
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
