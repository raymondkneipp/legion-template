import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Script from "next/script";
import {
	CTA,
	Hero,
	Layout,
	Services,
	Testimonials,
	Stats,
	News,
	Points,
	Meeting,
	Pricing,
} from "../components";
import { getNews } from "../utils";

const Home: NextPage<any> = ({ newsList }) => {
	return (
		<Layout>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<NextSeo title="Home" description="CHANGE ME" />
			<Hero />
			<News newsList={newsList} />
			<Meeting />
			<Pricing />
			<Stats />
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
