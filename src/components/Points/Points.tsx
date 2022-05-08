import { NextPage } from "next";
import { BsAwardFill } from "react-icons/bs";
import { Container, IconCard, Tile } from "@components";
import { useAppSelector } from "@store";

const Points: NextPage = () => {
	const { color } = useAppSelector((state) => state.theme);

	return (
		<section className={`my-10 py-20 bg-${color}-800`}>
			<Container>
				<Tile>
					<IconCard
						icon={BsAwardFill}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={BsAwardFill}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={BsAwardFill}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={BsAwardFill}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={BsAwardFill}
						title="Lorem, ipsum dolor sit amet"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
						light
						stack
						center
					/>
					<IconCard
						icon={BsAwardFill}
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
