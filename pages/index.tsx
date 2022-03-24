import type { NextPage } from 'next';
import {
  CTA,
  FAQ,
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
      <FAQ />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Home;
