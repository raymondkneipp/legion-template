import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { NextSeo } from 'next-seo';
import {
  FaAngleRight,
  FaBookOpen,
  FaCog,
  FaHome,
  FaPhone,
} from 'react-icons/fa';

interface Props {
  to: string;
  icon: IconType;
  page: string;
  description: string;
}

const LinkItem: NextPage<Props> = ({ to, icon, page, description }) => {
  return (
    <Link href={to}>
      <a className="flex items-center justify-between space-x-6 hover:bg-gray-200 py-2 px-4 rounded-full transition-colors">
        <span className="text-sky-700">
          {React.createElement(icon, { size: 30 })}
        </span>
        <div className="flex-1">
          <h3 className="text-lg">{page}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        <span className="text-gray-500">
          <FaAngleRight size={20} />
        </span>
      </a>
    </Link>
  );
};

const Custom404: NextPage = () => {
  return (
    <>
      <NextSeo title="404 Page Not Found" description="CHANGE ME" />
      <div className="container mx-auto max-w-xl flex flex-col space-y-2 min-h-screen items-center justify-center">
        <Image src="/logo.svg" width="80" height="80" layout="intrinsic" />
        <h1 className="text-center text-sky-700 pt-16">404 ERROR</h1>
        <h2 className="font-bold text-5xl text-center">
          This page does not exist.
        </h2>
        <p className="text-center text-gray-500 text-lg">
          The page you are looking for could not be found.
        </p>
        <div className="flex flex-col items-stretch w-full space-y-2 pt-12">
          <LinkItem
            to="/"
            icon={FaHome}
            page="Home"
            description="Go back to start"
          />
          <LinkItem
            to="/about"
            icon={FaBookOpen}
            page="About Us"
            description="Learn about our company"
          />
          <LinkItem
            to="/services"
            icon={FaCog}
            page="Services"
            description="View the services our company has to offer"
          />
          <LinkItem
            to="/contact"
            icon={FaPhone}
            page="Contact Us"
            description="Find a way to get ahold of us"
          />
        </div>
      </div>
    </>
  );
};

export default Custom404;
