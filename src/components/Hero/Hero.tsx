import { NextPage } from "next";
import Image from "next/image";
import {
	Button,
	Container,
	Divider,
	Typography,
	Centered,
} from "../../components/index";

const Hero: NextPage = () => {
	return (
		<section className="relative">
			<Image
				src={`/img/hero.jpg`}
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
							Welcome to John Doe American Legion Post XXX
						</Typography>
						<Typography variant="lead" color="light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
							earum distinctio veritatis quis nam minima assumenda accusamus
							officia, consectetur expedita doloribus unde quam facilis hic
							quidem? Facilis illum quas repudiandae.
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
