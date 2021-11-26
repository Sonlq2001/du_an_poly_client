import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import ProductProfile from '../components/product.Profile';
import Profile from '../components/profile';
import { WrapPage } from './Profile.styles';

import { getData, getProfile } from '../redux/profile.slice';
import Loading from 'components/Loading/Loading';

const ProfileScreens = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, profile, loading } = useSelector(
    (state) => state.productProfile
  );

  const getDatas = useCallback(() => {
    dispatch(getProfile(id));
    dispatch(getData(id));
  }, [dispatch, id]);

  useEffect(() => {
    getDatas();
  }, [dispatch, getDatas]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <WrapPage className="profile">
        {profile && product ? (
          <>
            <Profile id={id} profile={profile} />
            <ProductProfile product={product || []} id={id} profile={profile} />
          </>
        ) : (
          <Loading />
        )}
      </WrapPage>
    </div>
  );
};

export default ProfileScreens;
