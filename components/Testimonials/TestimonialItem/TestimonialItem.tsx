import { NextPage } from 'next';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Typography } from '../..';
import styles from './TestimonialItem.module.css';

interface Props {
  quote: string;
  name: string;
  image: string;
  stars: number;
}

// const TestimonialItem: NextPage<Props> = ({ quote, name, image, stars }) => {
//   return (
//       <figure className="space-y-6 bg-gray-100 p-6 rounded-xl">
//         <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-y-6 md:space-x-0 items-center lg:space-x-6 lg:space-y-0 lg:flex-row">
//           <div className="rounded-xl overflow-hidden relative h-48 w-full sm:h-28 sm:w-28 md:w-full md:h-48 lg:w-28 lg:h-28">
//             <Image
//               src={`/testimonials/${image}`}
//               layout="fill"
//               objectFit="cover"
//               alt={`${name}'s testimonial`}
//             />
//           </div>
//           <div className="space-y-2 flex flex-col items-center sm:items-start md:items-center lg:items-start">
//             <Typography variant="p" element="figcaption">
//               {name}
//             </Typography>
//             <div className="flex space-x-2 text-gray-600">
//               {[...Array(stars)].map((e, i) => (
//                 <FaStar key={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <Typography variant="p" element="blockquote">
//           "{quote}"
//         </Typography>
//       </figure>
//   );
// };

const TestimonialItem: NextPage<Props> = ({ quote, name, image, stars }) => {
  return (
    <figure className={styles.testimonialItem__grid}>
      <div className={styles.testimonialItem__image}>
        <Image
          src={`/testimonials/${image}`}
          layout="fill"
          objectFit="cover"
          alt={`${name}'s testimonial`}
        />
      </div>
      <div className={styles.testimonialItem__header}>
        <Typography variant="p" element="figcaption">
          {name}
        </Typography>
        <div className="flex space-x-2 text-gray-600">
          {[...Array(stars)].map((e, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
      <div className={styles.testimonialItem__quote}>
        <Typography variant="p" element="blockquote">
          "{quote}"
        </Typography>
      </div>
    </figure>
  );
};

export default TestimonialItem;
