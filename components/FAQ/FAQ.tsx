import { NextPage } from 'next';
import { Button } from '..';
import FAQItem from './FAQItem/FAQItem';

const FAQ: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-36 space-y-12">
      <div className="space-y-6">
        <h2 className="font-bold text-3xl">Frequently Asked Questions</h2>
        <p className="text-gray-500 max-w-2xl">
          provident delectus nihil aliquid harum facilis? Ullam saepe molestias
          optio! A, molestiae! If you can't find what you are looking for
          <Button to="/services" secondary>
            send us an email
          </Button>
          with your enquiry
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
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
