import { NextPage } from 'next';
import Image from 'next/image';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavBar: NextPage = () => {
  return (
    <nav className="border-b border-gray-300 py-4">
      <div className="container mx-auto flex items-center justify-between px-2">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" width="45" height="45" layout="fixed" />
          <span className="font-bold text-lg text-sky-700">Brand</span>
        </div>

        <div className="flex items-center space-x-4">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/services">Services</ActiveLink>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
