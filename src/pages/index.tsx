import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Script from "next/script";
import {
	CTA,
	Hero,
	Layout,
	Testimonials,
	Stats,
	News,
	Points,
	Meeting,
	Pricing,
} from "components/index";
import { getNews } from "utils/index";

const Home: NextPage<any> = ({ newsList }) => {
	return (
		<Layout>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<NextSeo title="Home" description="CHANGE ME" />
			<Hero />
			<News newsList={newsList} simple />
			<Meeting />
			<Stats />
			<Pricing />
			<Points />
			<Testimonials simple />
			<CTA />
		</Layout>
	);
};

Home.getInitialProps = async () => {
	const newsList = await getNews();

	return {
		newsList,
	};
};

export default Home;
