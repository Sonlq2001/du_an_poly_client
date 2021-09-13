import { lazy } from 'react';

const CategoryScreen = lazy(() => import('./../screens/CategoryScreen'));

const CATEGORY_SCREEN = {
  id: 'category',
  component: CategoryScreen,
  path: '/category',
};

export const CATEGORY_ROUTES = [CATEGORY_SCREEN];
