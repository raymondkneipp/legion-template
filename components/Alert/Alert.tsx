import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { Container, Typography } from '..';

interface Props {
  icon: IconType;
}

const Alert: NextPage<Props> = ({ icon, children }) => {
  return (
    <aside className="bg-sky-700 text-center py-4">
      <Container>
        <div className="flex items-center justify-between">
          {React.createElement(icon, { color: 'white', size: '18' })}
          <Typography variant="p" color="light">
            {children}
          </Typography>
          <FaTimes color="white" />
        </div>
      </Container>
    </aside>
  );
};

export default Alert;
