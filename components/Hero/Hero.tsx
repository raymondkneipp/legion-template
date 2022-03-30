import { NextPage } from 'next';
import Image from 'next/image';
import { Button, Typography } from '..';

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
      <div className="relative flex flex-col space-y-6 items-center justify-center bg-black bg-opacity-70 min-h-screen text-center">
        <Typography variant="h1" color="light">
          A Great Tagline Will Go Here!
        </Typography>
        <div className="max-w-lg">
          <Typography variant="lead" color="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            deserunt earum magnam voluptatem assumenda deleniti.
          </Typography>
        </div>
        <div className="gap-6 flex items-center">
          <Button to="/" lg>
            Get Started
          </Button>
          <Button to="/" secondary lg>
            Learn More
          </Button>
        </div>
      </div>
      {/* https://www.shapedivider.app/ */}
      {/* Copy and replace path element only */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden text-white">
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
          {/* <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          fill="#fff"
          ></path> */}
        </svg>
      </div>
    </section>
  );
};

export default Hero;
