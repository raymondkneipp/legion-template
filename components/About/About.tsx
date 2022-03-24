import { NextPage } from 'next';
import {
  FaBullseye,
  FaHandHoldingHeart,
  FaHandshake,
  FaUsers,
} from 'react-icons/fa';
import AboutItem from './AboutItem/AboutItem';

const About: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-20 grid grid-cols-3 gap-12">
      <div className="space-y-6">
        <h1 className="font-bold text-5xl">
          We Are <span className="text-sky-700">Brand</span>
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
          explicabo eveniet rerum quis. Voluptate in ex et rerum totam fugiat,
          similique officia dicta magni distinctio aliquid minima nam maxime.
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-6">
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
