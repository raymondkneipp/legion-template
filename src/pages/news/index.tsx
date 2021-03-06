import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CTA, Layout, News } from "@components";

const NewsPage: NextPage<any> = () => {
	return (
		<Layout>
			<NextSeo title="News" description="CHANGE ME" />
			<News />
			<CTA />
		</Layout>
	);
};

export default NewsPage;
