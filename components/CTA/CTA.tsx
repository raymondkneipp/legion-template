import { NextPage } from 'next';
import Image from 'next/image';
import { Button, Container, Divider, Typography } from '..';

const CTA: NextPage = () => {
  return (
    <div className="relative">
      <section className="bg-sky-700 relative">
        <Divider color="white" />
        <Container>
          <div className="flex flex-col space-y-6 items-center justify-center pt-28 pb-36 text-center">
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
        </Container>
      </section>
      <Divider color="white" bottom invert />
    </div>
  );
};

export default CTA;
