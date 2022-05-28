import { NextPage } from "next";
import {
	BsGeoAltFill,
	BsClockFill,
	BsStickyFill,
	BsPersonFill,
} from "react-icons/bs";
import { Container, IconCard, Tall, Typography } from "@components";
import { useAppSelector } from "@store";

const Upcoming: NextPage = () => {
	const { address } = useAppSelector((state) => state.contact);

	return (
		<section className="my-36">
			<Container>
				<Tall
					master={
						<>
							<Typography variant="h2">Upcoming Event</Typography>
							<Typography variant="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
								minus quod magni hic repudiandae expedita pariatur, quae enim
								voluptates eum
							</Typography>
						</>
					}
					slave={
						<>
							<IconCard
								title="Who"
								content="Everyone is welcome to attend"
								icon={BsPersonFill}
							/>
							<IconCard
								title="What"
								content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
								icon={BsStickyFill}
							/>
							<IconCard
								title="When"
								content="Monday April 18, 2022 @ 7:00 pm"
								icon={BsClockFill}
							/>
							<IconCard
								title="Where"
								content={`${address.street} ${address.city}, ${address.state} ${address.zip}`}
								icon={BsGeoAltFill}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default Upcoming;
