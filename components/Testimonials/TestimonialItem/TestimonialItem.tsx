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
      <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-y-6 md:space-x-0 items-center lg:space-x-6 lg:space-y-0 lg:flex-row">
        <div className="rounded-full overflow-hidden relative h-28 w-28">
          <Image
            src={`/testimonials/${image}`}
            layout="fill"
            objectFit="cover"
            alt={`${name}'s testimonial`}
          />
        </div>
        <div className="space-y-2 flex flex-col items-center sm:items-start md:items-center lg:items-start">
          <Typography variant="p" element="figcaption">
            {name}
          </Typography>
          <div className="flex space-x-2 text-gray-600">
            {[...Array(stars)].map((e, i) => (
              <FaStar key={i} />
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
