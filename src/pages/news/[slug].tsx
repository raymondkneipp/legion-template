import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout, Post } from "@components";
import { fetcher } from "@utils";
import { wrapper } from "@store";

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
		const { slug } = context.params;

		let post;

		try {
			post = await fetcher(`news/${slug}`);
		} catch (error) {
			return {
				redirect: {
					permanent: false,
					destination: "/404",
				},
			};
		}

		return {
			props: { post },
		};
	}
);

export default NewsPostPage;
