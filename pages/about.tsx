import type { NextPage } from 'next';
import { About, CTA, FAQ, Layout, Testimonials } from '../components';

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default AboutPage;
