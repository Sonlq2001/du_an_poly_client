import { lazy } from 'react';

import { ADD_PRODUCT_PATHS } from './../constants/add-product.paths';
const AddProductScreen = lazy(() => import('./../screens/ProductAddScreens'));

const ADD_PRODUCT_SCREEN = {
  id: 'id_product_add',
  path: ADD_PRODUCT_PATHS.ADD_PRODUCT,
  component: AddProductScreen,
};
export const ADD_PRODUCT_ROUTES = [ADD_PRODUCT_SCREEN];
