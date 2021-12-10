import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';

import ProductProfile from '../components/product.Profile';
import Profile from '../components/profile';
import { WrapPage } from './Profile.styles';
import NoResult from 'assets/images/no-result.png';
import { getData, getProfile } from '../redux/profile.slice';
import { GroupNoResult } from 'styles/common/index';

const ProfileScreens = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loadingProduct, loadingProfile, profile } = useSelector((state) => ({
    loadingProduct: state.productProfile.loadingProduct,
    profile: state.productProfile.profile,
    loadingProfile: state.productProfile.loadingProfile,
  }));

  const getDataProfile = useCallback(() => {
    if (id) {
      dispatch(getProfile(id));
      dispatch(getData(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    getDataProfile();
  }, [getDataProfile]);

  if (loadingProduct || loadingProfile || profile === null) {
    return <Loading />;
  } else if (!profile) {
    return (
      <div className="container">
        <GroupNoResult>
          <div className="body-no-result">
            <img src={NoResult} alt="" className="img-no-result" />
            <div className="box-no-result">
              <div className="label-no-result">Không tìm thấy kết quả nào</div>
              <div className="des-no-result">
                Hãy thử sử dụng các từ khóa chung chung hơn
              </div>
            </div>
          </div>
        </GroupNoResult>
      </div>
    );
  }
  return (
    <div className="container">
      <WrapPage className="profile">
        <Profile />
        <ProductProfile />
      </WrapPage>
    </div>
  );
};

export default ProfileScreens;
