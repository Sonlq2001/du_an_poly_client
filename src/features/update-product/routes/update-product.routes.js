import { lazy } from 'react';

import { ADD_PRODUCT_PATHS } from '../constants/update-product.paths';
const AddProductScreen = lazy(() => import('../screens/ProductUpdateScreens'));

const UPDATE_PRODUCT_SCREEN = {
  id: 'id_product_add',
  path: ADD_PRODUCT_PATHS.UPDATE_PRODUCT,
  component: AddProductScreen,
  isPrivateRoute: true,
};
export const UPDATE_PRODUCT_ROUTES = [UPDATE_PRODUCT_SCREEN];
