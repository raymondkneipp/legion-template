import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { Typography } from '../';

interface Props {
  icon: IconType;
  title: string;
  content: string;
}

const IconCard: NextPage<Props> = ({ icon, title, content }) => (
  <article className="flex items-start space-x-6">
    <div className="bg-sky-700 rounded-xl inline-block p-4">
      {React.createElement(icon, { color: 'white', size: '24' })}
    </div>
    <div className="space-y-2">
      <Typography variant="h3" color="primary">
        {title}
      </Typography>
      <Typography variant="p">{content}</Typography>
    </div>
  </article>
);

export default IconCard;
