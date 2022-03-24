import { NextPage } from 'next';
import TestimonialItem from './TestimonialItem/TestimonialItem';

const Testimonaials: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-20 space-y-12">
      <div className="space-y-6">
        <h2 className="font-bold text-3xl">Testimonials</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <TestimonialItem
          name="John Doe"
          quote="Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth."
          image="1.jpg"
          stars={5}
        />
        <TestimonialItem
          name="John Doe"
          quote="Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."
          image="2.jpg"
          stars={5}
        />
        <TestimonialItem
          name="John Doe"
          quote="When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."
          image="3.jpg"
          stars={5}
        />
      </div>
    </section>
  );
};

export default Testimonaials;
