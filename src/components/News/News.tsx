import { NextPage } from "next";
import { Card, Container, Typography, Wide } from "@components";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { useAppSelector } from "@store";

interface Props {
	simple?: boolean;
	newsList: {
		thumbnail: string;
		date: string;
		title: string;
		content: string;
	}[];
}

const News: NextPage<Props> = ({ simple = false, newsList }) => {
	const length = simple ? 3 : newsList.length;
	const { radius } = useAppSelector((state) => state.theme);

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
										<a className={`h-full block ${radius}`}>
											<Card
												image={`/${item.thumbnail}`}
												date={format(parseISO(item.date), "MMMM do yyyy")}
												title={item.title}
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
