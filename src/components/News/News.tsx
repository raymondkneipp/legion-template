import { NextPage } from "next";
import { Card, Container, Typography, Wide } from "..";

interface Props {
	simple?: boolean;
	newsList: {
		attributes: {
			thumbnail: string;
			date: string;
			title: string;
			content: string;
		};
	}[];
}

const News: NextPage<Props> = ({ simple = false, newsList }) => {
	const length = simple ? 3 : newsList.length;
	console.log({ length, newsList });

	return (
		<section className="my-36">
			<Container>
				<Wide
					master={
						<>
							{simple ? (
								<Typography variant="h2">Read The Latest News</Typography>
							) : (
								<Typography variant="h1">Read The Latest News</Typography>
							)}
							<Typography variant="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Inventore sit debitis facilis, corrupti eius hic quo tempora
								repellat rem quibusdam velit non quod dicta
							</Typography>
						</>
					}
					slave={
						<>
							{newsList.slice(0, length).map((item: any, i: number) => {
								return (
									<Card
										key={i}
										image={`/${item.attributes.thumbnail}`}
										date={item.attributes.date}
										title={item.attributes.title}
										content={item.html}
									/>
								);
							})}
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default News;
