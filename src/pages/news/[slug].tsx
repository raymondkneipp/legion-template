import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Centered, Layout, Post, Typography } from "../../components/index";

const NewsPostPage: NextPage<any> = ({ post }) => {
	if (!post) {
		return (
			<Layout>
				<NextSeo title="Post Not Found" />
				<Centered className="min-h-screen">
					<Typography variant="h1">Post Not Found</Typography>
				</Centered>
			</Layout>
		);
	}

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

NewsPostPage.getInitialProps = async ({ query }) => {
	const { slug } = query;
	const post = await import(`../../../content/news/${slug}.md`).catch(
		(error) => {
			return null;
		}
	);

	return {
		post,
	};
};

export default NewsPostPage;
