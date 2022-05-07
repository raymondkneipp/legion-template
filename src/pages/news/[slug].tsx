import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Router from "next/router";
import { Layout, Post } from "../../components/index";
import news from "../../utils/news";

const NewsPostPage: NextPage<any> = ({ post }) => {
	const { title, date, thumbnail, content } = post;

	return (
		<Layout>
			<NextSeo title={title} description="CHANGE ME" />
			<Post title={title} date={date} thumbnail={thumbnail} content={content} />
		</Layout>
	);
};

NewsPostPage.getInitialProps = async ({ res, query }) => {
	const { slug } = query;

	const post = news.find((item) => item.slug === slug);

	if (!post) {
		if (res) {
			res.writeHead(307, { Location: "/404" });
			res.end();
		} else {
			Router.replace("/404");
		}

		return {};
	}

	return {
		post,
	};
};

export default NewsPostPage;
