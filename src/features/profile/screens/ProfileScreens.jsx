import React from 'react';
import ProductProfile from '../components/product.Profile';
import Profile from '../components/profile';
const ProfileScreens = () => {
  return (
    <div className="container">
      <div>
        <Profile />
        <ProductProfile />
      </div>
    </div>
  );
};

export default ProfileScreens;
