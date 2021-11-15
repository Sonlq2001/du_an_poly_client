import React, { memo, useEffect, useCallback, useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

import LogoFpt from './../../../../assets/images/logo.png';
import {
  PageSingIn,
  PageSingInLeft,
  PageSingInRight,
  FormLogin,
  BoxSelect,
} from './SignScreen.styles';
import { postLogin, getCampuses } from './../../redux/auth.slice';
import Select from 'react-select';
import { MapOptionsCampuses } from 'helpers/convert/map-options';

const SignScreens = () => {
  const dispatch = useDispatch();
  const [Campuses_Code, setCampusesCode] = useState(null);
  const [message, setMessage] = useState(false);
  const dataCampuses = useCallback(() => {
    dispatch(getCampuses());
  }, [dispatch]);
  useEffect(() => {
    dataCampuses();
  }, [dispatch]);
  const history = useHistory();
  const { listCampuses } = useSelector((state) => state.auth);
  const optionCampuses = MapOptionsCampuses(listCampuses);
  const product_token = window.localStorage.getItem('product_token');
  const responseGoogle = (response) => {
    const { accessToken } = response;
    const data = { campus_code: Campuses_Code, access_token: accessToken };
    if (!Campuses_Code) {
      setMessage(true);
    } else {
      dispatch(postLogin(data))
        .then(unwrapResult)
        .then(() =>
          product_token
            ? history.push(`/product/update/${product_token}`)
            : history.push('/')
        );
    }
  };
  const handleCampuses = (data) => {
    setCampusesCode(data.value);
    setMessage(false);
  };

  return (
    <PageSingIn>
      <PageSingInLeft></PageSingInLeft>
      <PageSingInRight className="content">
        <FormLogin>
          <img src={LogoFpt} alt="" className="logo-from" />
          <p className="des-from">Cao đẳng thực hành Fpolytechnic</p>
          <BoxSelect className="campuses">
            <Select
              onChange={(e) => handleCampuses(e)}
              className="select-option input-search"
              placeholder="Lựa chọn cơ sở "
              options={optionCampuses}
            />
            {message && <p className="error">Vui lòng chọn cơ sở </p>}
          </BoxSelect>
          <GoogleLogin
            disabled={message}
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <button
                className="button-form"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <span className="icon-form">
                  <AiOutlineGoogle />
                </span>
                Google
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </FormLogin>
      </PageSingInRight>
    </PageSingIn>
  );
};

export default memo(SignScreens);
