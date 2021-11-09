import React, { useEffect, useCallback } from 'react';
import ProductProfile from '../components/product.Profile';
import Profile from '../components/profile';
import { WaperPage } from './Profile.styles';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getData, convertData, getProfile } from '../redux/profile.slice';
const ProfileScreens = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, profile } = useSelector((state) => state.productProfile);
  const { userLogin } = useSelector((state) => state.auth);
  const getData = useCallback(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);
  useEffect(async () => {
    dispatch(getProfile(id));
  }, [dispatch, id, userLogin]);
  return (
    <div className="container">
      <WaperPage className="profile">
        {profile ? (
          <>
            <Profile id={id} profile={profile} />
            <ProductProfile id={id} profile={profile} />
          </>
        ) : (
          <div className="loader">Loading... </div>
        )}
      </WaperPage>
    </div>
  );
};

export default ProfileScreens;
