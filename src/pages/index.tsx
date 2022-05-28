import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	CTA,
	Hero,
	Layout,
	Testimonials,
	Stats,
	News,
	Points,
	Upcoming,
	Pricing,
} from "@components";

const Home: NextPage<any> = () => {
	return (
		<Layout>
			<NextSeo title="Home" description="CHANGE ME" />
			<Hero />
			<News simple />
			<Upcoming />
			<Stats />
			<Pricing />
			<Points />
			<Testimonials simple />
			<CTA />
		</Layout>
	);
};

export default Home;
