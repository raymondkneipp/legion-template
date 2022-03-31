import { NextPage } from 'next';
import {
  FaBullseye,
  FaHandHoldingHeart,
  FaHandshake,
  FaUsers,
} from 'react-icons/fa';
import { IconCard, Tall, Typography } from '..';

const About: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-36">
      <Tall
        master={
          <>
            <Typography variant="h1">
              We Are <span className="text-sky-700">Brand</span>
            </Typography>
            <Typography variant="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              deleniti nihil animi voluptate illum repudiandae quisquam earum,
            </Typography>
          </>
        }
        slave={
          <>
            <IconCard
              title="Trusted Experts"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
              icon={FaUsers}
            />
            <IconCard
              title="Our Mission"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
              icon={FaBullseye}
            />
            <IconCard
              title="What We Value"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
              icon={FaHandHoldingHeart}
            />
            <IconCard
              title="How We Can Help You"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
              icon={FaHandshake}
            />
          </>
        }
      />
    </section>
  );
};

export default About;
