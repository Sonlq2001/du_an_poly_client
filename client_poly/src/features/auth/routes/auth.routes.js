import { lazy } from 'react';
const SignInScreen = lazy(() => import('./../screens/SignIn/SignScreens'));
const AuthLayout = lazy(() =>
  import('./../layouts/AuthLayouts/AuthLayoutScreens')
);

const SIGN_IN_SCREEN = {
  id: 'id_sign_in',
  path: '/sign-in',
  component: SignInScreen,
  layout: AuthLayout,
  isAuth: true,
};

export const SIGN_IN_ROUTES = [SIGN_IN_SCREEN];
