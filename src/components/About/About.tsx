import { NextPage } from "next";
import { FaBook, FaBullseye, FaEye } from "react-icons/fa";
import { Container, IconCard, Tall, Typography } from "../../components/index";
import { attributes as about } from "../../../content/about.md";
import { attributes as post } from "../../../content/post.md";

const About: NextPage = () => {
	return (
		<section className="my-36">
			<Container>
				<Tall
					master={
						<>
							<Typography variant="h1">
								We Are{" "}
								<Typography variant="h1" element="span" color="primary">
									Post {post.number}
								</Typography>
							</Typography>
							<Typography variant="lead">{about.description}</Typography>
						</>
					}
					slave={
						<>
							<IconCard
								title="Our Vision"
								content={about.vision}
								icon={FaEye}
							/>
							<IconCard
								title="Our Mission"
								content={about.mission}
								icon={FaBullseye}
							/>
							<div className="sm:col-span-2">
								<IconCard
									title="Our History"
									content={about.history}
									icon={FaBook}
								/>
							</div>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default About;
