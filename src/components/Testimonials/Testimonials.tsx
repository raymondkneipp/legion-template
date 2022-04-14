import { NextPage } from "next";
import { Container, Typography, Wide } from "components/index";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import { attributes as about } from "content/about.md";

interface Props {
	simple?: boolean;
}

interface IOfficer {
	name: string;
	description: string;
	title: string;
	image: string;
}

const Testimonaials: NextPage<Props> = ({ simple }) => {
	let length = simple ? 3 : about.officers.length;

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
							{about.officers
								.slice(0, length)
								.map((officer: IOfficer, i: number) => (
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
