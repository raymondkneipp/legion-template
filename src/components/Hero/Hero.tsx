import { NextPage } from "next";
import Image from "next/image";
import { Button, Container, Divider, Typography } from "..";
import Centered from "../layout/Centered/Centered";
import { attributes } from "../../../content/about.md";

const Hero: NextPage = () => {
	let { title, post, tagline } = attributes;
	return (
		<section className="relative">
			<Image
				src="/hero.jpg"
				alt="CHANGE ME"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
				priority={true}
			/>
			<div className="relative bg-black bg-opacity-70">
				<Container>
					<Centered className="min-h-screen">
						<Typography variant="h1" color="light">
							Welcome to {title} American Legion Post {post}
						</Typography>
						<Typography variant="lead" color="light">
							{tagline}
						</Typography>
						<div className="gap-6 flex items-center flex-row flex-wrap justify-center">
							<Button to="/join" lg>
								Become a Member
							</Button>
							<Button to="/contact" secondary lg>
								Contact Us
							</Button>
						</div>
					</Centered>
				</Container>
			</div>
			<Divider color="white" bottom flip />
		</section>
	);
};

export default Hero;
