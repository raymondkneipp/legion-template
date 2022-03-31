import { NextPage } from 'next';
import { Divider, Typography } from '..';
import TrustedItem from './TrustedItem/TrustedItem';

const Trusted: NextPage = () => {
  return (
    <div className="relative">
      <div className="bg-gray-100 my-36 relative">
        <Divider color="white" invert flip />
        <section className="container mx-auto px-2 space-y-6 pt-36 pb-28">
          <div className="space-y-2 flex items-center flex-col text-center">
            <Typography variant="h2">
              Trusted by 120+ small business owners
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            </Typography>
          </div>
          <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 items-center justify-around w-full">
            <TrustedItem title="100%" content="Satisfaction" />
            <TrustedItem title="746+" content="Happy Customers" />
            <TrustedItem title="24/7" content="Customer Support" />
          </div>
        </section>
      </div>
      <Divider color="white" bottom flip />
    </div>
  );
};

export default Trusted;
