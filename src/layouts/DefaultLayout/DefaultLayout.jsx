import React from 'react';
import Header from './../../components/Header/Header';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div className="s">Footer</div>
    </div>
  );
};

export default DefaultLayout;
