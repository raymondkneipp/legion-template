import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
  CTA,
  Hero,
  Layout,
  Services,
  Testimonials,
  Stats,
  News,
} from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Home" description="CHANGE ME" />
      <Hero />
      <Services simple />
      <Stats />
      <News />
      <Testimonials simple />
      <CTA />
    </Layout>
  );
};

export default Home;
