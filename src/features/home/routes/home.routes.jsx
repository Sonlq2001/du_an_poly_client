import { lazy } from 'react';
import Login from '../layouts/Login/Login';

const HomeScreen = lazy(() => import('./../screens/HomeScreen/HomeScreen'));

const HOME_SCREEN = {
  id: 'id_home',
  path: '/',
  component: HomeScreen,
};

export const HOME_ROUTES = [HOME_SCREEN];
