import { NextPage } from 'next';
import Image from 'next/image';
import { Button, Container, Divider, Typography } from '..';

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
          <div className="flex flex-col space-y-6 items-center justify-center text-center min-h-screen">
            <Typography variant="h1" color="light">
              A Great Tagline Will Go Here!
            </Typography>
            <div className="max-w-lg">
              <Typography variant="lead" color="light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                deserunt earum magnam voluptatem assumenda deleniti.
              </Typography>
            </div>
            <div className="gap-6 flex items-center flex-row flex-wrap justify-center">
              <Button to="/" lg>
                Get Started
              </Button>
              <Button to="/" secondary lg>
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Divider color="white" bottom invert />
    </section>
  );
};

export default Hero;
