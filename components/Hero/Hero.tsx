import { NextPage } from 'next';
import Image from 'next/image';
import { Button, Container, Divider, Typography } from '..';
import Centered from '../layout/Centered/Centered';

const Hero: NextPage = () => {
  return (
    <section className="relative">
      <Image
        src="/hero.jpg"
        alt="CHANGE ME"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <div className="relative bg-black bg-opacity-70">
        <Container>
          <Centered className="min-h-screen">
            <Typography variant="h1" color="light">
              A Great Tagline Will Go Here!
            </Typography>
            <Typography variant="lead" color="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              deserunt earum magnam voluptatem assumenda deleniti.
            </Typography>
            <div className="gap-6 flex items-center flex-row flex-wrap justify-center">
              <Button to="/contact" lg>
                Get Started
              </Button>
              <Button to="/services" secondary lg>
                Learn More
              </Button>
            </div>
          </Centered>
        </Container>
      </div>
      <Divider color="white" bottom invert />
    </section>
  );
};

export default Hero;
