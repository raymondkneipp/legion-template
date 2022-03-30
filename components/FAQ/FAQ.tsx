import { NextPage } from 'next';
import { Typography } from '..';
import FAQItem from './FAQItem/FAQItem';

const FAQ: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-36 space-y-12">
      <div className="space-y-6">
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <div className="max-w-2xl">
          <Typography variant="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odio
            assumenda nulla vel alias, sequi corporis dignissimos sunt dolorum
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FAQItem
          title="How do you make a pizza?"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
        />
        <FAQItem
          title="What is the square root of 64?"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
        />
        <FAQItem
          title="How do you spell 'cat'?"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
        />
        <FAQItem title="Are cats cooler than dogs?" content="Maybe." />
        <FAQItem
          title="How many developers does it take to screw in a light bulb?"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
        />
        <FAQItem
          title="What band sings Beliver?"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
        />
      </div>
    </section>
  );
};

export default FAQ;
