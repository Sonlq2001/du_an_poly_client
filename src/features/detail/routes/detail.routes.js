import { lazy } from 'react';

const DetailScreen = lazy(() =>
  import('./../screens/DetailScreen/DetailScreen')
);

const DETAIL_SCREEN = {
  id: 'id_detail',
  path: '/product/:id',
  component: DetailScreen,
};

export const DETAIL_ROUTES = [DETAIL_SCREEN];
