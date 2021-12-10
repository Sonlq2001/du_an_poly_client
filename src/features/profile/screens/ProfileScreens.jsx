import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import ProductProfile from '../components/product.Profile';
import Profile from '../components/profile';
import { WrapePage } from './Profile.styles';

import { getData, getProfile } from '../redux/profile.slice';
import Loading from 'components/Loading/Loading';

const ProfileScreens = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {loadingProduct,loadingProflie,profile} = useSelector((state) => state.productProfile);
  const getDatas = useCallback(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);
  const getDatasProduct= useCallback(() => {
       dispatch(getData(id));
  }, [dispatch, id]);

  useEffect(() => {
    getDatas();
    getDatasProduct()
  }, [dispatch,getDatas,getDatasProduct]);

  if(loadingProduct || loadingProflie ||  profile === null ){
    return <Loading />
  }else if(!profile){
    return <div className='container'> vui lòng thử lại sau </div>
  }
  return (
    <div className="container">
      <WrapePage className="profile">
          <Profile/>
          <ProductProfile/>
      </WrapePage>
    </div>
  );
};

export default ProfileScreens;
