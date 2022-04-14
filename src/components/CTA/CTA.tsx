import { NextPage } from "next";
import {
	Button,
	Container,
	Divider,
	Typography,
	Centered,
} from "../../components/index";
import { useTheme } from "../../store/ThemeContext";

const CTA: NextPage = () => {
	const { color } = useTheme();

	return (
		<div className="relative">
			<section className={`bg-${color}-800 relative`}>
				<Divider color="white" />
				<Container>
					<Centered className="py-36">
						<Typography variant="h1" element="h2" color="light">
							Join Our Post Today!
						</Typography>
						<Typography variant="lead" color="light">
							Join our post and be a part of the largest veteran organization
							reaching over two million members.
						</Typography>
						<Button to="/apply" secondary lg>
							Become a Member
						</Button>
					</Centered>
				</Container>
			</section>
			<Divider color="gray-100" bottom flip />
		</div>
	);
};

export default CTA;
