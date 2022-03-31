import { NextPage } from 'next';
import { Container, Typography, Wide } from '..';
import FAQItem from './FAQItem/FAQItem';

const FAQ: NextPage = () => {
  return (
    <section className="my-36">
      <Container>
        <Wide
          master={
            <>
              <Typography variant="h2">Frequently Asked Questions</Typography>
              <Typography variant="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                odio assumenda nulla vel alias, sequi corporis dignissimos sunt
                dolorum
              </Typography>
            </>
          }
          slave={
            <>
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
            </>
          }
        />
      </Container>
    </section>
  );
};

export default FAQ;
