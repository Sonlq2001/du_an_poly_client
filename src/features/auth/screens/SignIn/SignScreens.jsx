import React, { memo } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import LogoFpt from './../../../../assets/images/logo.png';
import {
  PageSingIn,
  PageSingInLeft,
  PageSingInRight,
  FormLogin,
} from './SignScreen.styles';
import { loginSocial } from './../../redux/auth.slice';

const SignScreens = () => {
  return (
    <PageSingIn>
      <PageSingInLeft></PageSingInLeft>
      <PageSingInRight className="content">
        <FormLogin>
          <img src={LogoFpt} alt="" className="logo-from" />
          <p className="des-from">Cao đẳng thực hành Fpolytechnic</p>
          <button className="button-form">
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
