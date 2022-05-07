import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CTA, Layout, News } from "../../components/index";
import news from "../../utils/news";

const NewsPage: NextPage<any> = () => {
	return (
		<Layout>
			<NextSeo title="News" description="CHANGE ME" />
			<News newsList={news} />
			<CTA />
		</Layout>
	);
};

export default NewsPage;
