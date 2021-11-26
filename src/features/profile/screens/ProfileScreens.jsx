import React, { useEffect, useCallback } from 'react';
import ProductProfile from '../components/product.Profile';
import Profile from '../components/profile';
import { WrapePage } from './Profile.styles';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getData, getProfile } from '../redux/profile.slice';
import Loading from 'components/Loading/Loading';
const ProfileScreens = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, profile } = useSelector((state) => state.productProfile);
  const getDatas = useCallback(() => {
    dispatch(getProfile(id));
    dispatch(getData(id));
  }, [dispatch, id]);
  useEffect(() => {
    getDatas();
  }, [dispatch,getDatas]);

  return (
    <div className="container">
      <WrapePage className="profile">
        {profile !== null ? (
          <> {profile !== undefined ? 
            <>
            <Profile id={id} profile={profile} />
            <ProductProfile product={product || []} id={id} profile={profile} />
            </>
            :<div className="messengers">  Profile không tồn tại !  </div>}
          </>
        ) : (
          <Loading />
        )}
      </WrapePage>
    </div>
  );
};

export default ProfileScreens;
