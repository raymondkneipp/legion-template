import { NextPage } from "next";
import { Card, Container, Typography, Wide } from "..";
import { format, parseISO } from "date-fns";
import Link from "next/link";

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
						</>
					}
					slave={
						<>
							{newsList.slice(0, length).map((item: any, i: number) => {
								return (
									<Link href={`/news/${item.slug}`} key={i}>
										<a className="h-full block">
											<Card
												image={`/${item.attributes.thumbnail}`}
												date={format(
													parseISO(item.attributes.date),
													"MMMM do yyyy"
												)}
												title={item.attributes.title}
												content={item.html}
											/>
										</a>
									</Link>
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
