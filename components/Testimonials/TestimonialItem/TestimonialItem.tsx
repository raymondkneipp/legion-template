import { NextPage } from 'next';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface Props {
  quote: string;
  name: string;
  image: string;
  stars: number;
}

const TestimonialItem: NextPage<Props> = ({ quote, name, image, stars }) => {
  return (
    <figure className="space-y-2">
      <div className="flex items-center space-x-6">
        <div className="rounded-full overflow-hidden relative h-28 w-28">
          <Image
            src={`/testimonials/${image}`}
            layout="fill"
            width="300"
            height="300"
            objectFit="cover"
            alt={`${name}'s testimonial`}
          />
        </div>
        <div className="space-y-2">
          <figcaption>{name}</figcaption>
          <div className="flex space-x-2">
            {[...Array(stars)].map((e, i) => (
              <FaStar />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-start flex-col space-y-2">
        <blockquote className="text-lg text-gray-500">"{quote}"</blockquote>
      </div>
    </figure>
  );
};

export default TestimonialItem;
