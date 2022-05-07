import { NextPage } from "next";
import { Container, Typography, Wide } from "@components";
import PricingItem from "./PricingItem/PricingItem";

const Pricing: NextPage = () => {
	return (
		<section className="my-36">
			<Container>
				<Wide
					master={
						<>
							<Typography variant="h2">Rent Our Hall</Typography>
							<Typography variant="lead">
								Our hall is perfect for many different occasions, including
								rehearsal dinners, showers, birthday parties, retirements or
								anniversary dinners, celebrations of life, sports banquets,
								gatherings, corporate meetings, seminars, conferences, and even
								reunions.
							</Typography>
						</>
					}
					slave={
						<>
							<PricingItem
								name="Half Hall"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
								price={30}
								perks={[
									"100 seats",
									"1 Keg",
									"1 Bartender",
									"Access to kitchen",
									"100 table covers",
								]}
							/>
							<PricingItem
								name="Full Hall"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
								price={55}
								perks={[
									"200 seats",
									"2 Kegs",
									"2 Bartenders",
									"Access to kitchen",
									"200 table covers",
								]}
							/>
							<PricingItem
								name="Holidays"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
								price={80}
								perks={[
									"200 seats",
									"3 Kegs",
									"2 Bartenders",
									"Access to kitchen",
									"200 table covers",
								]}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default Pricing;
