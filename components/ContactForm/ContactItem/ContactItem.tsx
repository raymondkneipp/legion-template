import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
}

const ContactItem: NextPage<Props> = ({ icon, children }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-500">
      <div className="rounded-full inline-block p-4">
        {React.createElement(icon, { size: '24' })}
      </div>
      <p>{children}</p>
    </div>
  );
};

export default ContactItem;
