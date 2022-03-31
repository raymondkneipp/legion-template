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
import { Typography } from '..';
import PageLink from './PageLink/PageLink';
import SocialIcon from './SocialIcon/SocialIcon';

const Footer: NextPage = () => {
  return (
    <footer className="container mx-auto px-2 my-10 space-y-6">
      <div className="flex flex-col items-center space-y-2 justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
        <PageLink to="/" page="Home" />
        <PageLink to="/about" page="About" />
        <PageLink to="/services" page="Services" />
        <PageLink to="/contact" page="Contact" />
        <PageLink to="/privacy-policy" page="Privacy Policy" />
        <PageLink to="/terms-of-use" page="Terms of Use" />
        <PageLink to="/not-found" page="404" />
      </div>

      <div className="flex flex-col space-y-6 items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-6">
          <SocialIcon
            to="https://www.instagram.com/?hl=en"
            icon={FaInstagram}
          />
          <SocialIcon to="https://www.facebook.com/" icon={FaFacebook} />
          <SocialIcon to="https://twitter.com/?lang=en" icon={FaTwitter} />
          <SocialIcon to="https://www.linkedin.com/" icon={FaLinkedin} />
          <SocialIcon to="https://www.tiktok.com/en/" icon={FaTiktok} />
        </div>
        <div className="space-x-1 flex items-center text-gray-600">
          <FaRegCopyright />
          <Typography variant="p">
            2022 Brand, Inc. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
