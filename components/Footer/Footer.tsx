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
import PageLink from './PageLink/PageLink';
import SocialIcon from './SocialIcon/SocialIcon';

const Footer: NextPage = () => {
  return (
    <footer className="relative pb-10">
      <div className="container mx-auto flex flex-col items-center space-y-6 text-gray-500">
        <div className="flex items-center space-x-6">
          <PageLink to="/" page="Home" />
          <PageLink to="/about" page="About" />
          <PageLink to="/services" page="Services" />
          <PageLink to="/contact" page="Contact" />
        </div>
        <div className="flex items-center space-x-6">
          <SocialIcon
            to="https://www.instagram.com/?hl=en"
            icon={FaInstagram}
          />
          <SocialIcon to="https://www.facebook.com/" icon={FaFacebook} />
          <SocialIcon to="https://twitter.com/?lang=en" icon={FaTwitter} />
          <SocialIcon to="https://www.linkedin.com/" icon={FaLinkedin} />
          <SocialIcon to="https://www.tiktok.com/en/" icon={FaTiktok} />
        </div>
        <div className="space-y-2 flex items-center flex-col">
          <div className="flex items-center space-x-1">
            <FaRegCopyright />
            <span>2022 Brand, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2">
            <PageLink to="/privacy-policy" page="Privacy Policy" />
            <PageLink to="/terms-of-use" page="Terms of Use" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
