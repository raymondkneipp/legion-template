import { NextPage } from 'next';
import { Button, Container, Divider, Typography, Centered } from '..';

const CTA: NextPage = () => {
  return (
    <div className="relative">
      <section className="bg-sky-700 relative">
        <Divider color="white" />
        <Container>
          <div className="pt-28 pb-36">
            <Centered>
              <Typography variant="h1" element="h2" color="light">
                Claim Your Free Estimate Today!
              </Typography>
              <Typography variant="lead" color="light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum modi pariatur earum ducimus a, magnam similique,
              </Typography>
              <Button to="/contact" secondary lg>
                Free Estimate
              </Button>
            </Centered>
          </div>
        </Container>
      </section>
      <Divider color="white" bottom invert />
    </div>
  );
};

export default CTA;
