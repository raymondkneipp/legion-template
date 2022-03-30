import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
  CTA,
  Hero,
  Layout,
  Services,
  Testimonials,
  Trusted,
  Typography,
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
      <Typography variant="h1">Hello, World!</Typography>
      <div className="bg-sky-700">
        <Typography variant="h1" color="light">
          Hello, World!
        </Typography>
      </div>
      <Typography variant="h1" color="dark">
        Hello, World!
      </Typography>
      <Typography variant="h1" color="primary">
        Hello, World!
      </Typography>
      <Typography variant="h2">Hello, World!</Typography>
      <Typography variant="h3">Hello, World!</Typography>
      <Typography variant="h4">Hello, World!</Typography>
      <Typography variant="h5">Hello, World!</Typography>
      <Typography variant="h6">Hello, World!</Typography>
      <Typography variant="p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus,
        placeat dicta velit tempora sunt eaque, nam temporibus sapiente odio
        corporis culpa consectetur voluptas sequi repudiandae, nostrum nobis a.
        Explicabo.
      </Typography>
      <Typography variant="p" color="dark">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus,
        placeat dicta velit tempora sunt eaque, nam temporibus sapiente odio
        corporis culpa consectetur voluptas sequi repudiandae, nostrum nobis a.
        Explicabo.
      </Typography>
      <div className="bg-sky-700">
        <Typography variant="p" color="light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus,
          placeat dicta velit tempora sunt eaque, nam temporibus sapiente odio
          corporis culpa consectetur voluptas sequi repudiandae, nostrum nobis
          a. Explicabo.
        </Typography>
      </div>
      <Typography variant="p" color="primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus,
        placeat dicta velit tempora sunt eaque, nam temporibus sapiente odio
        corporis culpa consectetur voluptas sequi repudiandae, nostrum nobis a.
        Explicabo.
      </Typography>
      <Typography variant="h1" element="p">
        A paragraph tag but styled like an H1.
      </Typography>
    </Layout>
  );
};

export default Home;
