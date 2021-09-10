import React from 'react';
import Header from './../../components/Header/Header';
import Loading from './../../components/Loading/Loading';
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Loading />
      <div className="">
        <Header />
      </div>
      {children}
      <div className="s">Footer</div>
    </div>
  );
};

export default DefaultLayout;
