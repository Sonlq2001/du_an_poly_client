import React, { memo } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import LogoFpt from './../../../../assets/images/logo.png';
import {
  PageSingIn,
  PageSingInLeft,
  PageSingInRight,
  FormLogin,
} from './SignScreen.styles';
import { loginSocial } from './../../redux/auth.slice';

const SignScreens = () => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(loginSocial());
  };

  return (
    <PageSingIn>
      <PageSingInLeft></PageSingInLeft>
      <PageSingInRight className="content">
        <FormLogin>
          <img src={LogoFpt} alt="" className="logo-from" />
          <p className="des-from">Cao đẳng thực hành Fpolytechnic</p>
          <button className="button-form" onClick={handleSignIn}>
            <span className="icon-form">
              <AiOutlineGoogle />
            </span>
            Google
          </button>
        </FormLogin>
      </PageSingInRight>
    </PageSingIn>
  );
};

export default memo(SignScreens);
