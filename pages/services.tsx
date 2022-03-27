import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { CTA, Layout, Services } from '../components';

const ServicesPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Services" description="CHANGE ME" />
      <Services />
      <CTA />
    </Layout>
  );
};

export default ServicesPage;
