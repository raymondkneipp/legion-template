import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Router from "next/router";
import { Centered, Layout, Post, Typography } from "../../components/index";

const NewsPostPage: NextPage<any> = ({ post }) => {
	const {
		attributes: { title, date, thumbnail },
		html,
	} = post;

	return (
		<Layout>
			<NextSeo title={title} description="CHANGE ME" />
			<Post title={title} date={date} thumbnail={thumbnail} content={html} />
		</Layout>
	);
};

NewsPostPage.getInitialProps = async ({ res, query }) => {
	const { slug } = query;

	const post = await import(`../../../content/news/${slug}.md`).catch(
		(error) => null
	);

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
