import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Typography } from '../..';
import ActiveLink from './ActiveLink/ActiveLink';

const NavBar: NextPage = () => {
  return (
    <nav className="border-b border-gray-300 py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2 rounded-xl">
              <Image src="/logo.svg" width="45" height="45" layout="fixed" />
              <Typography variant="h4" color="primary" element="span">
                Brand
              </Typography>
            </a>
          </Link>

          <div className="md:flex items-center space-x-4 hidden">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/services">Services</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
