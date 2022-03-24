import { NextPage } from 'next';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaRegCopyright,
} from 'react-icons/fa';

const Footer: NextPage = () => {
  return (
    <footer className="relative pb-10">
      <div className="container mx-auto flex flex-col items-center space-y-6 text-gray-500">
        <div className="flex items-center space-x-12">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://www.instagram.com/?hl=en">
            <FaInstagram size={25} />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook size={25} />
          </a>
          <a href="https://twitter.com/?lang=en">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin size={25} />
          </a>
          <a href="https://www.tiktok.com/en/">
            <FaTiktok size={25} />
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <FaRegCopyright />
          <span>2022 Brand, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
