import React, { memo, useEffect, useCallback, useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import _get from 'lodash.get';
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
  const [codeCampus, setCampusesCode] = useState(null);
  const [message, setMessage] = useState(false);
  const [isError, setIsError] = useState(false);
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
  const responseGoogle = async (response) => {
    const { accessToken } = response;
    const data = { campus_code: codeCampus, access_token: accessToken };
    if (!codeCampus) {
      setMessage(true);
    } else {
      const responsive = await dispatch(postLogin(data))
      if (postLogin.fulfilled.match(responsive)) {
        product_token
          ? history.push(`/product/update/${product_token}`)
          : history.push('/')
      }else{
        console.log("lỗi")
        setIsError(true);
        setMessage(_get(responsive, 'payload', ''));
      }
    }
  };
  const handleClickLogin = () => {
    if (!codeCampus) {
      setIsError(true);
      setMessage('Vui lòng chọn cơ sở');
    }
  };
  const handleCampuses = (data) => {
    setCampusesCode(data.value);
    setMessage(false);
    setIsError(false);
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
            {isError && <p className="error">{message}</p>}
          </BoxSelect>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <button
                className="button-form"
                onClick={
                  !isError && codeCampus
                    ? renderProps.onClick
                    : handleClickLogin
                }
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
