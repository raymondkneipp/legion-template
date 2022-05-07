import { NextPage } from "next";
import { FiMapPin, FiClock, FiCalendar, FiList } from "react-icons/fi";
import { Container, IconCard, Tall, Typography } from "../../components/index";

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
								icon={FiMapPin}
							/>
							<IconCard
								title="Date"
								content="Monday April 18, 2022"
								icon={FiCalendar}
							/>
							<IconCard title="Time" content="7:00 pm" icon={FiClock} />
							<IconCard
								title="Agenda"
								content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
								icon={FiList}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default Meeting;
