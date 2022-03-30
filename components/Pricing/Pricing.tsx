import { NextPage } from 'next';
import { Typography } from '..';
import PricingItem from './PricingItem/PricingItem';

const Pricing: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-36 space-y-12">
      <div className="space-y-6">
        <Typography variant="h2">Pricing Plans</Typography>
        <div className="max-w-2xl">
          <Typography variant="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sit debitis facilis, corrupti eius hic quo tempora repellat rem
            quibusdam velit non quod dicta
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <PricingItem
          name="Hobby"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          price={12}
          perks={'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(
            's'
          )}
        />
        <PricingItem
          name="Startup"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          price={24}
          perks={'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(
            's'
          )}
        />
        <PricingItem
          name="Enterprise"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          price={32}
          perks={'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(
            's'
          )}
        />
      </div>
    </section>
  );
};

export default Pricing;
