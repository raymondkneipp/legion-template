import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { Typography } from '..';

interface Props {
  icon: IconType;
}

const Alert: NextPage<Props> = ({ icon, children }) => {
  return (
    <section className="bg-sky-700 text-white text-center py-4">
      <div className="container mx-auto px-2 flex items-center justify-between">
        {React.createElement(icon, { color: 'white', size: '18' })}
        <Typography variant="p" color="light">
          {children}
        </Typography>
        <FaTimes />
      </div>
    </section>
  );
};

export default Alert;
