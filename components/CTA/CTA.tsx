import { NextPage } from 'next';
import Image from 'next/image';
import { Button, Divider, Typography } from '..';

const CTA: NextPage = () => {
  return (
    <div className="relative pb-8 md:pb-20">
      <section className="bg-sky-700 relative">
        <Divider color="white" />
        <div className="flex flex-col space-y-6 items-center justify-center py-20 text-center">
          <Typography variant="h1" element="h2" color="light">
            Claim Your Free Estimate Today!
          </Typography>
          <div className="max-w-lg text-center">
            <Typography variant="lead" color="light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum modi pariatur earum ducimus a, magnam similique,
            </Typography>
          </div>
          <Button to="/contact" secondary lg>
            Free Estimate
          </Button>
        </div>
      </section>
      <Divider color="sky-700" bottom />
    </div>
  );
};

export default CTA;
