import type { NextPage } from 'next';
import { FaGift } from 'react-icons/fa';
import { Alert, Footer, NavBar } from '../';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Alert to="/services" button="Learn More" icon={FaGift}>
        Big News! We're offering 30% off all services.
      </Alert>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
