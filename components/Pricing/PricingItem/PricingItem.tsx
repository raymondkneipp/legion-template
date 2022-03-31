import { NextPage } from 'next';
import { FaCheck } from 'react-icons/fa';
import { Button, Typography } from '../..';

interface Props {
  name: string;
  description: string;
  price: number;
  perks: string[];
}

const PricingItem: NextPage<Props> = ({ name, description, price, perks }) => {
  return (
    <div className="flex flex-col items-stretch space-y-6 bg-gray-100 p-6 rounded-xl">
      <div className="space-y-2">
        <Typography variant="h3">{name}</Typography>
        <Typography variant="p">{description}</Typography>
      </div>
      <div className="flex items-baseline space-x-2">
        <Typography variant="h1" element="h4">
          ${price}
        </Typography>
        <Typography variant="p" element="span">
          / mo
        </Typography>
      </div>
      <Button to="/">Buy {name}</Button>
      <div className="space-y-2">
        <Typography variant="h6">WHAT'S INCLUDED</Typography>
        <ul className="space-y-2">
          {perks.map((perk) => (
            <li className="text-green-500 flex items-center space-x-2">
              <FaCheck size={12} />
              <Typography variant="p">{perk}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingItem;
