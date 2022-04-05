import { NextPage } from 'next';
import React from 'react';
import { Container } from '..';

const Banner: NextPage = ({ children }) => {
  return (
    <aside className="bg-sky-800 text-center py-3">
      <Container>
        <div className="flex items-center justify-center space-x-4">
          {children}
        </div>
      </Container>
    </aside>
  );
};

export default Banner;
