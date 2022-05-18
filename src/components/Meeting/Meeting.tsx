import { NextPage } from "next";
import {
	BsGeoAltFill,
	BsClockFill,
	BsCalendarFill,
	BsStickyFill,
} from "react-icons/bs";
import { Container, IconCard, Tall, Typography } from "@components";
import { useAppSelector } from "@store";

const Meeting: NextPage = () => {
	const { address } = useAppSelector((state) => state.contact);

	return (
		<section className="my-36">
			<Container>
				<Tall
					master={
						<>
							<Typography variant="h2">Upcoming Meeting</Typography>
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
								title="Location"
								content={`${address.street} ${address.city}, ${address.state} ${address.zip}`}
								icon={BsGeoAltFill}
							/>
							<IconCard
								title="Date"
								content="Monday April 18, 2022"
								icon={BsCalendarFill}
							/>
							<IconCard title="Time" content="7:00 pm" icon={BsClockFill} />
							<IconCard
								title="Agenda"
								content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
								icon={BsStickyFill}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default Meeting;
