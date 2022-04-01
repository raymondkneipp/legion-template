import { NextPage } from 'next';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Container } from '..';

const Banner: NextPage = ({ children }) => {
  return (
    <aside className="bg-sky-700 text-center py-3">
      <Container>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center justify-center space-x-4 flex-1">
            {children}
          </div>
          <FaTimes color="white" />
        </div>
      </Container>
    </aside>
  );
};

export default Banner;
