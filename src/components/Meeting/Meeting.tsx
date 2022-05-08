import { NextPage } from "next";
import {
	BsGeoAltFill,
	BsClockFill,
	BsCalendarFill,
	BsStickyFill,
} from "react-icons/bs";
import { Container, IconCard, Tall, Typography } from "@components";

const Meeting: NextPage = () => {
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
								content={`2442 Otter Ave Providence, Rhode Island 34593`}
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
