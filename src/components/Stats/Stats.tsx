import { NextPage } from "next";
import { Container, Divider, Typography, Centered } from "components/index";
import StatsItem from "./StatsItem/StatsItem";

const Stats: NextPage = () => {
	return (
		<div className="relative">
			<div className="bg-gray-100 my-36 relative">
				<Divider color="white" />
				<Container>
					<Centered className="py-36">
						<Typography variant="h2">What Makes Our Post Great?</Typography>
						<Typography variant="p">
							We are committed to the support of veterans, active duty military,
							their families and the community.
						</Typography>
						<div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 items-center justify-around w-full">
							<StatsItem title="145+" content="Veteran Members" />
							<StatsItem title="$68,152" content="Funds Raised" />
							<StatsItem title="214,632+" content="Hours of Service" />
						</div>
					</Centered>
				</Container>
			</div>
			<Divider color="white" bottom flip />
		</div>
	);
};

export default Stats;
