import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { Button, Typography } from '..';

interface Props {
  to: string;
  button: string;
  icon: IconType;
}

const Alert: NextPage<Props> = ({ to, button, icon, children }) => {
  return (
    <section className="bg-sky-700 text-white text-center py-4">
      <div className="container mx-auto px-2 flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          {React.createElement(icon, { color: 'white', size: '18' })}
          <Typography variant="p" color="light">
            {children}
          </Typography>
          <Button to={to}>{button}</Button>
        </div>
        <FaTimes />
      </div>
    </section>
  );
};

export default Alert;
