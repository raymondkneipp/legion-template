import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { Button } from '..';

interface Props {
  to: string;
  button: string;
  icon: IconType;
}

const Alert: NextPage<Props> = ({ to, button, icon, children }) => {
  return (
    <div className="bg-sky-700 text-white text-center py-4">
      <div className="container mx-auto px-2 flex items-center justify-between">
        <div className="flex items-center space-x-4 justify-center flex-1">
          <span>
            {React.createElement(icon, { color: 'white', size: '18' })}
          </span>
          <span>{children}</span>
          <Button to={to} light secondary>
            {button}
          </Button>
        </div>
        <FaTimes />
      </div>
    </div>
  );
};

export default Alert;
