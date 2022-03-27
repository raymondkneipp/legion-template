import { NextPage } from 'next';
import { FaCheck } from 'react-icons/fa';
import { Button } from '../..';

interface Props {
  name: string;
  description: string;
  price: number;
  perks: string[];
}

const PricingItem: NextPage<Props> = ({ name, description, price, perks }) => {
  return (
    <div className="flex flex-col items-stretch space-y-6 bg-gray-100 p-6 rounded-md">
      <div className="space-y-2">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <h4 className="font-bold text-4xl">
        ${price}
        <span className="text-gray-500 text-base"> / mo</span>
      </h4>
      <Button to="/">Buy {name}</Button>
      <div className="space-y-2">
        <h5 className="text-sm uppercase font-bold">What's Included</h5>
        <ul className="space-y-2">
          {perks.map((perk) => (
            <li className="text-green-500 flex items-center space-x-2">
              <FaCheck size={12} />
              <span className="text-gray-500">{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingItem;
