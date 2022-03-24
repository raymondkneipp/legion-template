import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  title: string;
  content: string;
}

const ServiceItem: NextPage<Props> = ({ icon, title, content }) => {
  return (
    <article className="flex items-start space-x-6">
      <div className="bg-sky-700 rounded-full inline-block p-4">
        {React.createElement(icon, { color: 'white', size: '24' })}
      </div>
      <div className="space-y-2">
        <header>
          <h3 className="text-sky-700 font-bold text-xl">{title}</h3>
        </header>
        <p className="text-gray-500">{content}</p>
      </div>
    </article>
  );
};

export default ServiceItem;
