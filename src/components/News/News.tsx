import { NextPage } from "next";
import { Card, Container, Typography, Wide } from "@components";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { useAppSelector } from "@store";

interface Props {
	simple?: boolean;
}

const News: NextPage<Props> = ({ simple = false }) => {
	const { radius } = useAppSelector((state) => state.theme);
	const { entities } = useAppSelector((state) => state.news);
	const length = simple ? 3 : entities.length;

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
							{entities.slice(0, length).map((item: any, i: number) => {
								return (
									<Link href={`/news/${item.slug}`} key={i}>
										<a className={`h-full block ${radius}`}>
											<Card
												image={`/${item.thumbnail}`}
												date={format(
													new Date(item.date.seconds * 1000),
													"MMMM do yyyy"
												)}
												title={item.title}
												content={item.content}
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
