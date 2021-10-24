import { lazy } from 'react';

import { DETAIL_PATHS } from './../constants/detail.paths';
const DetailScreen = lazy(() =>
  import('./../screens/DetailScreen/DetailScreen')
);

const DETAIL_SCREEN = {
  id: 'id_detail',
  path: DETAIL_PATHS.DETAIL_PRODUCT,
  component: DetailScreen,
};

export const DETAIL_ROUTES = [DETAIL_SCREEN];
