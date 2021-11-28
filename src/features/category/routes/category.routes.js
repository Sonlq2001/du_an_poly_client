import { lazy } from 'react';
import { CATEGORY_PATHS } from './../constants/category.paths';

const CategoryScreen = lazy(() => import('./../screens/CategoryScreen'));

const CATEGORY_SCREEN = {
  id: 'category',
  component: CategoryScreen,
  path: CATEGORY_PATHS.GET_PRODUCT_CATEGORY,
  titlePage: 'Danh sách các sản phẩm',
};

export const CATEGORY_ROUTES = [CATEGORY_SCREEN];
