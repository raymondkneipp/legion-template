import { NextPage } from "next";
import { FiTarget, FiEye, FiBookOpen, FiHeart } from "react-icons/fi";
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
								icon={FiEye}
							/>
							<IconCard
								title="Our Mission"
								content={about.mission}
								icon={FiTarget}
							/>
							<IconCard
								title="How We Started"
								content={about.history}
								icon={FiBookOpen}
							/>
							<IconCard
								title="What We Value"
								content={about.history}
								icon={FiHeart}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default About;
