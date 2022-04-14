import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CTA, Layout, News } from "../../components/index";
import { getNews } from "../../utils/index";

const NewsPage: NextPage<any> = ({ newsList }) => {
	return (
		<Layout>
			<NextSeo title="News" description="CHANGE ME" />
			<News newsList={newsList} />
			<CTA />
		</Layout>
	);
};

NewsPage.getInitialProps = async () => {
	const newsList = await getNews();

	return {
		newsList,
	};
};

export default NewsPage;
