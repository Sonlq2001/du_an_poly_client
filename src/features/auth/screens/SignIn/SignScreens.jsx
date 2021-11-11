import React, { memo } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

import LogoFpt from './../../../../assets/images/logo.png';
import {
  PageSingIn,
  PageSingInLeft,
  PageSingInRight,
  FormLogin,
} from './SignScreen.styles';
import { postLogin } from './../../redux/auth.slice';

const SignScreens = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const responseGoogle = (response) => {
    const { accessToken } = response;
    dispatch(postLogin(accessToken))
      .then(unwrapResult)
      .then(() => history.goBack());
  };

  return (
    <PageSingIn>
      <PageSingInLeft></PageSingInLeft>
      <PageSingInRight className="content">
        <FormLogin>
          <img src={LogoFpt} alt="" className="logo-from" />
          <p className="des-from">Cao đẳng thực hành Fpolytechnic</p>
          <GoogleLogin
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
