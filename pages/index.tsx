import type { NextPage } from 'next';
import { FaGift } from 'react-icons/fa';
import {
  Alert,
  CTA,
  FAQ,
  Footer,
  Hero,
  NavBar,
  Services,
  Testimonials,
  Trusted,
} from '../components/';

const Home: NextPage = () => {
  return (
    <>
      <Alert to="/" button="Learn More" icon={FaGift}>
        Big News! We're offering 30% off all services.
      </Alert>
      <NavBar />
      <Hero />
      <Services simple />
      <Services />
      <Trusted />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
