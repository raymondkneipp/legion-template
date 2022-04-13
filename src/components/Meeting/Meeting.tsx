import { NextPage } from "next";
import {
	FaBullhorn,
	FaPencilAlt,
	FaGlobe,
	FaSearch,
	FaShoppingCart,
	FaVectorSquare,
	FaMapMarkerAlt,
	FaCalendar,
	FaClock,
	FaList,
} from "react-icons/fa";
import { Button, Container, IconCard, Tall, Typography } from "..";
import { attributes as address } from "../../../content/address.md";

const Meeting: NextPage = () => {
	const { street, city, state, zip } = address;
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
								content={`${street} ${city}, ${state} ${zip}`}
								icon={FaMapMarkerAlt}
							/>
							<IconCard
								title="Date"
								content="Monday April 18, 2022"
								icon={FaCalendar}
							/>
							<IconCard title="Time" content="7:00 pm" icon={FaClock} />
							<IconCard
								title="Agenda"
								content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
								icon={FaList}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default Meeting;
