import { lazy } from 'react';

import { ADD_PRODUCT_PATHS } from '../constants/update-product.paths';
const AddProductScreen = lazy(() => import('../screens/ProductUpdateScreens'));

const UPDATE_PRODUCT_SCREEN = {
  id: 'id_product_update',
  path: ADD_PRODUCT_PATHS.UPDATE_PRODUCT,
  component: AddProductScreen,
  titlePage: 'Cập nhật sản phẩm ',
};
export const UPDATE_PRODUCT_ROUTES = [UPDATE_PRODUCT_SCREEN];
