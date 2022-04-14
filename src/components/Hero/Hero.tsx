import { NextPage } from "next";
import Image from "next/image";
import { Button, Container, Divider, Typography } from "@components/index";
import Centered from "../layout/Centered/Centered";
import { attributes as home } from "@content/home.md";
import { attributes as post } from "@content/post.md";

const Hero: NextPage = () => {
	return (
		<section className="relative">
			<Image
				src={`/${home.image}`}
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
							Welcome to {post.name} American Legion Post {post.number}
						</Typography>
						<Typography variant="lead" color="light">
							{home.tagline}
						</Typography>
						<div className="gap-6 flex items-center flex-row flex-wrap justify-center">
							<Button to="/apply" lg>
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
