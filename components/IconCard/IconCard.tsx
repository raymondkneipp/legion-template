import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { Typography } from '../';

interface Props {
  icon: IconType;
  title: string;
  content: string;
  stack?: boolean;
  light?: boolean;
}

const IconCard: NextPage<Props> = ({
  icon,
  title,
  content,
  stack = false,
  light = false,
}) => (
  <article
    className={`flex items-start space-x-6 ${
      stack ? 'flex-col space-x-0 space-y-6' : ''
    }`}
  >
    <div className="bg-sky-600 rounded-xl inline-block p-4">
      {React.createElement(icon, { color: 'white', size: '24' })}
    </div>
    <div className="space-y-2">
      <Typography variant="h3" color={light ? 'light' : 'primary'}>
        {title}
      </Typography>
      <Typography variant="p" color={light ? 'light' : 'dark'}>
        {content}
      </Typography>
    </div>
  </article>
);

export default IconCard;
