import type { NextPage } from 'next';
import { CTA, Layout, Services } from '../components';

const ServicesPage: NextPage = () => {
  return (
    <Layout>
      <Services />
      <CTA />
    </Layout>
  );
};

export default ServicesPage;
