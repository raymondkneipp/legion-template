import { NextPage } from 'next';
import {
  FaBullseye,
  FaHandHoldingHeart,
  FaHandshake,
  FaUsers,
} from 'react-icons/fa';
import { Typography } from '..';
import AboutItem from './AboutItem/AboutItem';

const About: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-36 grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-y-12">
      <div className="space-y-6">
        <Typography variant="h1">
          We Are <span className="text-sky-700">Brand</span>
        </Typography>
        <Typography variant="lead">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          deleniti nihil animi voluptate illum repudiandae quisquam earum,
        </Typography>
      </div>
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
        <AboutItem
          title="Trusted Experts"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaUsers}
        />
        <AboutItem
          title="Our Mission"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaBullseye}
        />
        <AboutItem
          title="What We Value"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaHandHoldingHeart}
        />
        <AboutItem
          title="How We Can Help You"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaHandshake}
        />
      </div>
    </section>
  );
};

export default About;
