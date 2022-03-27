import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { CTA, Layout, Pricing, Services } from '../components';

const ServicesPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Services" description="CHANGE ME" />
      <Services />
      <Pricing />
      <CTA />
    </Layout>
  );
};

export default ServicesPage;
