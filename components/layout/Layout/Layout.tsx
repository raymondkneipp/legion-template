import type { NextPage } from 'next';
import { FaGift } from 'react-icons/fa';
import { Banner, Button, Footer, NavBar, Typography } from '../../';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Banner>
        <Typography variant="p" color="light">
          Big News! We're offering 30% off all services.
        </Typography>
        <Button secondary to="/" sm>
          Learn More
        </Button>
      </Banner>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
