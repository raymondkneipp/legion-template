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
} from "@components";
import { news } from "@utils";

const Home: NextPage<any> = () => {
	return (
		<Layout>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<NextSeo title="Home" description="CHANGE ME" />
			<Hero />
			<News simple />
			<Meeting />
			<Stats />
			<Pricing />
			<Points />
			<Testimonials simple />
			<CTA />
		</Layout>
	);
};

export default Home;
