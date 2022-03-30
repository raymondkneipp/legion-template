import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
  CTA,
  Hero,
  Layout,
  Services,
  Testimonials,
  Trusted,
} from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Home" description="CHANGE ME" />
      <Hero />
      <Services simple />
      <Trusted />
      <Testimonials simple />
      <CTA />
    </Layout>
  );
};

export default Home;
