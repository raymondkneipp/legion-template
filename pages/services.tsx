import type { NextPage } from 'next';
import { CTA, Layout, Services } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <Services />
      <CTA />
    </Layout>
  );
};

export default Home;
