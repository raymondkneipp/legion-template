import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CTA, Layout, News, Pricing, Services } from "../../components";
import { getNews } from "../../utils";

const ServicesPage: NextPage<any> = ({ newsList }) => {
	return (
		<Layout>
			<NextSeo title="Services" description="CHANGE ME" />
			<News newsList={newsList} />
			<CTA />
		</Layout>
	);
};

ServicesPage.getInitialProps = async () => {
	const newsList = await getNews();

	return {
		newsList,
	};
};

export default ServicesPage;
