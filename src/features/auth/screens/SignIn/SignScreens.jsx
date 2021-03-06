import React, { memo } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import LogoFpt from 'assets/images/logo.png';
import {
  PageSingIn,
  PageSingInLeft,
  PageSingInRight,
  FormLogin,
} from './SignScreen.styles';
import { postLogin } from './../../redux/auth.slice';
import { MESSAGE_DEFAULT, KEY_PRODUCT } from 'constants/app.constants';
import { ADD_PRODUCT_PATHS } from 'features/add-product/constants/add-product.paths';

const SignScreens = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const responseGoogle = async (response) => {
    const { accessToken } = response;

    if (accessToken) {
      const data = { access_token: accessToken };
      const responsive = await dispatch(postLogin(data));
      if (postLogin.fulfilled.match(responsive)) {
        const tokenProduct = window.sessionStorage.getItem(KEY_PRODUCT);
        tokenProduct
          ? history.push(
              ADD_PRODUCT_PATHS.ADD_PRODUCT.replace(
                /:product_token/,
                tokenProduct
              )
            )
          : history.push('/');
      } else {
        toast.error(MESSAGE_DEFAULT.PROBLEM);
      }
    }
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
