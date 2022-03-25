import { NextPage } from 'next';
import TrustedItem from './TrustedItem/TrustedItem';

const Trusted: NextPage = () => {
  return (
    <div className="bg-gray-100 my-36 py-20">
      <section className="container mx-auto px-2 flex items-center flex-col space-y-2">
        <h2 className="text-3xl font-bold">
          Trusted by 120+ small business owners
        </h2>
        <p className="text-xl text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          distinctio officiis
        </p>
        <div className="flex items-center justify-around w-full pt-6">
          <TrustedItem title="100%" content="Satisfaction" />
          <TrustedItem title="746+" content="Happy Customers" />
          <TrustedItem title="24/7" content="Customer Support" />
        </div>
      </section>
    </div>
  );
};

export default Trusted;
