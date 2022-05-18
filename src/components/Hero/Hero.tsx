import { NextPage } from "next";
import Image from "next/image";
import { Button, Container, Divider, Typography, Centered } from "@components";
import { useAppSelector } from "@store";

const Hero: NextPage = () => {
	const { id, name } = useAppSelector((state) => state.post);
	const { text, image } = useAppSelector((state) => state.hero);

	return (
		<section className="relative">
			<Image
				loader={(src) => `http://localhost:3000/${src}`}
				unoptimized={true}
				src={`img/${image}`}
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
							Welcome to {name} American Legion Post {id}
						</Typography>
						<Typography variant="lead" color="light">
							{text}
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
