import { NextPage } from "next";
import { FiAward } from "react-icons/fi";
import { Container, IconCard, Tile } from "@components";
import { useTheme } from "@store/ThemeContext";

const Points: NextPage = () => {
	const { color } = useTheme();

	return (
		<section className={`my-10 py-20 bg-${color}-800`}>
			<Container>
				<Tile>
					<IconCard
						icon={FiAward}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={FiAward}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={FiAward}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={FiAward}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={FiAward}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={FiAward}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
				</Tile>
			</Container>
		</section>
	);
};

export default Points;
