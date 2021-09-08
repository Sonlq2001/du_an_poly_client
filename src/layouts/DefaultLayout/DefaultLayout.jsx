import React from 'react';
import Navbar from './../../components/Nabar/Navbar';
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      {children}
      <div className="s">Footer</div>
    </div>
  );
};

export default DefaultLayout;
