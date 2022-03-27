import { NextPage } from 'next';
import PricingItem from './PricingItem/PricingItem';

const Pricing: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-36 space-y-12">
      <div className="space-y-6">
        <h2 className="font-bold text-3xl">Pricing Plans</h2>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          eos? Saepe eum repudiandae a provident quod nobis aut, deleniti
          officiis consectetur commodi, magni architecto, et ullam quibusdam id
          accusamus illum.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <PricingItem
          name="Hobby"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          price={12}
          perks={'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(
            ' '
          )}
        />
        <PricingItem
          name="Startup"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          price={24}
          perks={'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(
            ' '
          )}
        />
        <PricingItem
          name="Enterprise"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          price={32}
          perks={'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(
            ' '
          )}
        />
      </div>
    </section>
  );
};

export default Pricing;
