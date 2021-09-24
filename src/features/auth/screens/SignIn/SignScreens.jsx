import React, { memo } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useGoogleLogin, GoogleLogin } from 'react-google-login';
import LogoFpt from './../../../../assets/images/logo.png';
import {
  PageSingIn,
  PageSingInLeft,
  PageSingInRight,
  FormLogin,
} from './SignScreen.styles';

const SignScreens = () => {
  const responseGoogle = (response) => {
    console.log('ở đây ', response);
  };
  return (
    <PageSingIn>
      <PageSingInLeft></PageSingInLeft>
      <PageSingInRight className="content">
        <FormLogin>
          <img src={LogoFpt} alt="" className="logo-from" />
          <p className="des-from">Cao đẳng thực hành Fpolytechnic</p>
          <button className="button-form">
            <GoogleLogin
              clientId="231695115576-r5jrpmc72fh2o5kfs4h4pdgsuahkr9io.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </button>
        </FormLogin>
      </PageSingInRight>
    </PageSingIn>
  );
};

export default memo(SignScreens);
