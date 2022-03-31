import type { NextPage } from 'next';
import { FaGift } from 'react-icons/fa';
import { Alert, Footer, NavBar } from '../../';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Alert icon={FaGift}>
        Big News! We're offering 30% off all services.
      </Alert>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
