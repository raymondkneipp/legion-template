import { NextPage } from "next";
import { Container, Typography, Wide } from "../../components/index";
import TestimonialItem from "./TestimonialItem/TestimonialItem";

interface Props {
	simple?: boolean;
}

interface IOfficer {
	name: string;
	description: string;
	title: string;
	image: string;
}

const officers: IOfficer[] = Array(6).fill({
	name: "John Smith",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet dolore at consequatur maxime ullam, commodi officiis quis, voluptatem accusantium necessitatibus explicabo nemo sed. Quo suscipit temporibus voluptatem quis harum.",
	title: "President",
	image: "img/4.jpg",
});

const Testimonaials: NextPage<Props> = ({ simple }) => {
	let length = simple ? 3 : officers.length;

	return (
		<section className="my-36">
			<Container>
				<Wide
					master={
						<Typography variant="h2" className="text-center sm:text-left">
							Post Officers
						</Typography>
					}
					slave={
						<>
							{officers.slice(0, length).map((officer: IOfficer, i: number) => (
								<TestimonialItem
									name={officer.name}
									quote={officer.description}
									image={`/${officer.image}`}
									title={officer.title}
									key={i}
								/>
							))}
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default Testimonaials;
