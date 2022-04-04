import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import {
  CTA,
  Hero,
  Layout,
  Services,
  Testimonials,
  Stats,
  News,
  Points,
} from '../components';
import { attributes, react as HomeContent } from '../content/home.md';

const Home: NextPage = () => {
  let { title, cats } = attributes;
  return (
    <Layout>
      <h1>{title}</h1>
      <h1>{title}</h1>
      <h1>{title}</h1>
      <h1>{title}</h1>
      <h1>{title}</h1>
      <HomeContent />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <NextSeo title="Home" description="CHANGE ME" />
      <Hero />
      <Services simple />
      <Stats />
      <News />
      <Points />
      <Testimonials simple />
      <CTA />
    </Layout>
  );
};

export default Home;
