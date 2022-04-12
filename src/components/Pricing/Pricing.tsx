import { NextPage } from "next";
import { Container, Typography, Wide } from "..";
import PricingItem from "./PricingItem/PricingItem";

const Pricing: NextPage = () => {
	return (
		<section className="my-36">
			<Container>
				<Wide
					master={
						<>
							<Typography variant="h2">Rent Our Hall</Typography>
							<div className="max-w-2xl">
								<Typography variant="lead">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Inventore sit debitis facilis, corrupti eius hic quo tempora
									repellat rem quibusdam velit non quod dicta
								</Typography>
							</div>
						</>
					}
					slave={
						<>
							<PricingItem
								name="Weekdays"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
								price={25}
								perks={"Lorem ipsum dolor sit amet consectetur adipisicing elit".split(
									"s"
								)}
							/>
							<PricingItem
								name="Weekends"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
								price={60}
								perks={"Lorem ipsum dolor sit amet consectetur adipisicing elit".split(
									"s"
								)}
							/>
							<PricingItem
								name="Holidays"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
								price={90}
								perks={"Lorem ipsum dolor sit amet consectetur adipisicing elit".split(
									"s"
								)}
							/>
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default Pricing;
