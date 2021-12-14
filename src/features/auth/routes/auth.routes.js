import { lazy } from 'react';

import { AUTH_PATHS } from './../constants/auth.paths';

const SignInScreen = lazy(() => import('./../screens/SignIn/SignScreens'));
const AuthLayout = lazy(() =>
  import('./../layouts/AuthLayouts/AuthLayoutScreens')
);

const SIGN_IN_SCREEN = {
  id: 'id_sign_in',
  path: AUTH_PATHS.SIGN_IN,
  component: SignInScreen,
  layout: AuthLayout,
  isAuth: true,
  titlePage: 'Đăng nhập',
};

export const SIGN_IN_ROUTES = [SIGN_IN_SCREEN];
