import { lazy } from 'react';

const HomeScreen = lazy(() => import('./../screens/HomeScreen/HomeScreen'));

const HOME_SCREEN = {
  id: 'id_home',
  path: '/',
  component: HomeScreen,
  exact: true,
};

export const HOME_ROUTES = [HOME_SCREEN];
