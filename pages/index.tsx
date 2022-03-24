import type { NextPage } from 'next';
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
      <Hero />
      <Services simple />
      <Trusted />
      <Testimonials simple />
      <CTA />
    </Layout>
  );
};

export default Home;
