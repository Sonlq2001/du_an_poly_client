import React, { useEffect, useCallback, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';

import {
  HeaderProfile,
  GroupProfile,
  GroupTabsProfile,
  GroupContent,
  BoxProduct,
} from './Profile.styles';
import { getProfile } from '../redux/profile.slice';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import { DETAIL_PATHS } from 'features/detail/constants/detail.paths';

const ProfileScreens = () => {
  const dispatch = useDispatch();
  const [statusTabs, setStatusTabs] = useState(1);
  const { id } = useParams();
  const { isProfileLoading, profile } = useSelector((state) => ({
    isProfileLoading: state.userProfile?.isProfileLoading,
    profile: state.userProfile?.profile,
  }));

  const getDataProfile = useCallback(() => {
    if (id) {
      dispatch(getProfile(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    getDataProfile();
  }, [getDataProfile]);

  if (isProfileLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Breadcrumb position="Thông tin cá nhân" />

      <HeaderProfile>
        <div className="profile-left">
          <img src={profile?.avatar} alt="" className="profile-avatar" />
        </div>

        <div className="profile-right">
          <GroupProfile>
            <label htmlFor="" className="profile-label">
              Họ tên:
            </label>
            <div className="profile-name">{profile?.name}</div>
          </GroupProfile>
          <GroupProfile>
            <label htmlFor="" className="profile-label">
              Email:
            </label>
            <div className="profile-name">{profile?.email}</div>
          </GroupProfile>
          <GroupProfile>
            <label htmlFor="" className="profile-label">
              Mã số SV:
            </label>
            <div className="profile-name">
              {profile?.student_code?.toUpperCase()}
            </div>
          </GroupProfile>
          <GroupProfile>
            <label htmlFor="" className="profile-label">
              Cở sở:
            </label>
            <div className="profile-name">{profile?.campuses?.name}</div>
          </GroupProfile>
          <GroupProfile>
            <label htmlFor="" className="profile-label">
              Mô tả:
            </label>
            <div className="profile-name">{profile?.description}</div>
          </GroupProfile>
        </div>
      </HeaderProfile>

      <GroupTabsProfile>
        <div className="group-button">
          <button
            className={`btn-tab ${statusTabs === 1 && 'active'}`}
            onClick={() => setStatusTabs(1)}
          >
            Sản phẩm
          </button>
          <button
            className={`btn-tab ${statusTabs === 2 && 'active'}`}
            onClick={() => setStatusTabs(2)}
          >
            Chờ xác nhận
          </button>
        </div>
        <GroupContent>
          {statusTabs === 1 && (
            <div className="row content-active">
              {profile?.get_products.length > 0 &&
                profile?.get_products.map((product) => {
                  if (product?.status === 3) {
                    return (
                      <div className="xl-2-5" key={product?.id}>
                        <BoxProduct>
                          <Link
                            to={DETAIL_PATHS.DETAIL_PRODUCT.replace(
                              ':id',
                              product?.id
                            )}
                            className="box-content"
                          >
                            <div className="product-img">
                              <img src={product?.image} alt="" />
                            </div>
                            <div className="product-content">
                              <div className="product-name">
                                {product?.name}
                              </div>
                            </div>
                          </Link>
                        </BoxProduct>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          )}

          {statusTabs === 2 && (
            <div className="row content-active">
              {profile?.get_products?.length > 0 &&
                profile?.get_products?.map((product) => {
                  if (product?.status !== 3) {
                    return (
                      <div className="xl-2-5" key={product?.id}>
                        <BoxProduct>
                          <Link
                            to={DETAIL_PATHS.DETAIL_PRODUCT.replace(
                              ':id',
                              product?.id
                            )}
                            className="box-content"
                          >
                            <div className="product-img">
                              <img src={product?.image} alt="" />
                            </div>
                            <div className="product-content">
                              <div className="product-name">
                                {product?.name}
                              </div>
                            </div>
                          </Link>
                          <Link
                            className="updateproduct"
                            to={`/update/product/${product?.id}`}
                          >
                            Cập nhật
                          </Link>
                        </BoxProduct>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          )}
        </GroupContent>
      </GroupTabsProfile>
    </div>
  );
};

export default ProfileScreens;
