import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { About, CTA, FAQ, Layout, Testimonials } from "../components";

const AboutPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="About" description="CHANGE ME" />
			<About />
			<Testimonials />
			<FAQ />
			<CTA />
		</Layout>
	);
};

export default AboutPage;
