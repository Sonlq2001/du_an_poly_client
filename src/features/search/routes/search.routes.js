import { lazy } from 'react';
import { SEARCH_PATHS } from './../constants/search.paths';

const SEARCH_SCREEN = {
  id: 'search',
  component: lazy(() => import('./../screens/SearchScreen/SearchScreen')),
  path: SEARCH_PATHS.SEARCH_MAIN,
  titlePage: 'Tìm kiếm',
};

export const SEARCH_ROUTES = [SEARCH_SCREEN];
