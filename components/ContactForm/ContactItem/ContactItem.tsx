import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { Typography } from '../..';

interface Props {
  icon: IconType;
}

const ContactItem: NextPage<Props> = ({ icon, children }) => {
  return (
    <Typography variant="p">
      <span className="flex items-center space-x-6">
        {React.createElement(icon, { size: '24' })}

        <span>{children}</span>
      </span>
    </Typography>
  );
};

export default ContactItem;
