import React from 'react';
import styled from 'styled-components';
import ProductProfile from '../components/product.Profile';
import Profile from '../components/profile';
const WaperPage = styled.div`
  padding: 5px 0px;
`;
const ProfileScreens = () => {
  return (
    <div className="container">
      <WaperPage className="profle">
        <Profile />
        <ProductProfile />
      </WaperPage>
    </div>
  );
};

export default ProfileScreens;
