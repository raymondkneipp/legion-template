import { NextPage } from "next";
import { Button, Container, Divider, Typography, Centered } from "..";

const CTA: NextPage = () => {
	return (
		<div className="relative">
			<section className="bg-sky-800 relative">
				<Divider color="white" />
				<Container>
					<div className="py-36">
						<Centered>
							<Typography variant="h1" element="h2" color="light">
								Join Our Post Today!
							</Typography>
							<Typography variant="lead" color="light">
								If you have served at least one day of active military duty
								since December 7, 1941 and were honorably discharged or you are
								still serving active military duty honorably, you are eligible
								to join.
							</Typography>
							<Button to="/apply" secondary lg>
								Become a Member
							</Button>
						</Centered>
					</div>
				</Container>
			</section>
			<Divider color="white" bottom flip />
		</div>
	);
};

export default CTA;
