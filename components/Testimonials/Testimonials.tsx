import { NextPage } from 'next';
import { Container, Typography, Wide } from '..';
import TestimonialItem from './TestimonialItem/TestimonialItem';

interface Props {
  simple?: boolean;
}

const Testimonaials: NextPage<Props> = ({ simple }) => {
  return (
    <section className="my-36">
      <Container>
        <Wide
          master={
            <Typography variant="h2" className="text-center sm:text-left">
              Testimonials
            </Typography>
          }
          slave={
            <>
              <TestimonialItem
                name="John Doe"
                quote="Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth."
                image="1.jpg"
                stars={5}
              />
              <TestimonialItem
                name="Mitch Goodman"
                quote="Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."
                image="2.jpg"
                stars={5}
              />
              <TestimonialItem
                name="Sarah Harden"
                quote="When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."
                image="3.jpg"
                stars={5}
              />
              {!simple && (
                <>
                  <TestimonialItem
                    name="Matthew Jones"
                    quote="Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
                    image="4.jpg"
                    stars={5}
                  />
                  <TestimonialItem
                    name="Steve Jobs"
                    quote="You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
                    image="5.jpg"
                    stars={4}
                  />
                  <TestimonialItem
                    name="Megan Marley"
                    quote="The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."
                    image="6.jpg"
                    stars={5}
                  />
                </>
              )}
            </>
          }
        />
      </Container>
    </section>
  );
};

export default Testimonaials;
