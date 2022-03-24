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
    <footer className="relative py-10">
      <div className="absolute top-0 left-0 w-full overflow-hidden text-sky-700 rotate-180 pointer-events-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
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
