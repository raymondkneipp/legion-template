import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Router from "next/router";
import { Layout, Post } from "@components";
import { fetcher } from "@utils";

const NewsPostPage: NextPage<any> = ({ post }) => {
	const { title, date, thumbnail, content } = post;

	return (
		<Layout>
			<NextSeo title={title} description="CHANGE ME" />
			<Post title={title} date={date} thumbnail={thumbnail} content={content} />
		</Layout>
	);
};

// NewsPostPage.getInitialProps = async ({ res, query }) => {
// 	const { slug } = query;

// 	const post = await fetcher(`news/${slug}`);

// 	if (!post) {
// 		if (res) {
// 			res.writeHead(307, { Location: "/404" });
// 			res.end();
// 		} else {
// 			Router.replace("/404");
// 		}

// 		return {};
// 	}

// 	return {
// 		post,
// 	};
// };

export async function getServerSideProps(context) {
	const { slug } = context.params;
	const postId = context.req.headers.host.split(".")[0];

	console.log({ slug, postId });
	const BASE_URL = "http://localhost:5000";

	const res = await fetch(`${BASE_URL}/news/${slug}?postId=${postId}`);
	let post;

	try {
		post = await res.json();
		if (!post) throw "Not Found";
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

export default NewsPostPage;
