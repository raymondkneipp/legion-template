import { NextPage } from "next";
import {
	BsBullseye,
	BsEyeFill,
	BsBookmarkFill,
	BsHeartFill,
} from "react-icons/bs";
import { Container, IconCard, Tall, Typography } from "@components";

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
								icon={BsEyeFill}
							/>
							<IconCard
								title="Our Mission"
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est."
								icon={BsBullseye}
							/>
							<IconCard
								title="How We Started"
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est."
								icon={BsBookmarkFill}
							/>
							<IconCard
								title="What We Value"
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est."
								icon={BsHeartFill}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default About;
