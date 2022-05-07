import { NextPage } from "next";
import { FiTarget, FiEye, FiBookOpen, FiHeart } from "react-icons/fi";
import { Container, IconCard, Tall, Typography } from "../../components/index";

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
									Post XXX
								</Typography>
							</Typography>
							<Typography variant="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
								nobis illum doloremque reiciendis molestiae laudantium, aliquid
								deserunt iure temporibus? Voluptatibus placeat deleniti
								reiciendis facere odit, velit magni temporibus perspiciatis est.
							</Typography>
						</>
					}
					slave={
						<>
							<IconCard
								title="Our Vision"
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est."
								icon={FiEye}
							/>
							<IconCard
								title="Our Mission"
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est."
								icon={FiTarget}
							/>
							<IconCard
								title="How We Started"
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est."
								icon={FiBookOpen}
							/>
							<IconCard
								title="What We Value"
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est."
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
