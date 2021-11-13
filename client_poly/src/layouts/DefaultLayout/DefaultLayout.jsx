import React from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { WrapPage } from './../../styles/common/index';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <WrapPage>{children}</WrapPage>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
