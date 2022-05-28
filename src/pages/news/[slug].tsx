import type { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { NextSeo } from "next-seo";
import { Layout, Post } from "@components";
import { wrapper } from "@store";
import { getNews } from "@store/news/news.actions";

interface IParams extends ParsedUrlQuery {
	slug: string;
}

const NewsPostPage: NextPage<any> = ({ post }) => {
	const { title, date, thumbnail, content } = post;

	return (
		<Layout>
			<NextSeo title={title} description="CHANGE ME" />
			<Post title={title} date={date} thumbnail={thumbnail} content={content} />
		</Layout>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async (context) => {
		const { slug } = context.params as IParams;

		let post;

		store.dispatch(getNews());

		let index = store
			.getState()
			.news.entities.findIndex((post: any) => post.slug === slug);

		if (index === -1) {
			return {
				redirect: {
					permanent: false,
					destination: "/404",
				},
			};
		}

		post = store.getState().news.entities[index];

		return {
			props: { post },
		};
	}
);

export default NewsPostPage;
