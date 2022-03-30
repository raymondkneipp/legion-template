import { NextPage } from 'next';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Typography } from '../..';

interface Props {
  quote: string;
  name: string;
  image: string;
  stars: number;
}

const TestimonialItem: NextPage<Props> = ({ quote, name, image, stars }) => {
  return (
    <figure className="space-y-6 bg-gray-100 p-6 rounded-3xl">
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
          <Typography variant="p" element="figcaption">
            {name}
          </Typography>
          <div className="flex space-x-2 text-gray-600">
            {[...Array(stars)].map((e, i) => (
              <FaStar />
            ))}
          </div>
        </div>
      </div>
      <Typography variant="p" element="blockquote">
        "{quote}"
      </Typography>
    </figure>
  );
};

export default TestimonialItem;
