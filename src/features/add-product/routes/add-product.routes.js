import { lazy } from 'react';
const AddProductScreen = lazy(() => import('./../screens/ProductAddScreens'));

const ADD_PRODUCT_SCREEN = {
  id: 'id_product_add',
  path: '/product/update/:product_token',
  component: AddProductScreen,
  // isPrivateRoute: true,
};
export const ADD_PRODUCT_ROUTES = [ADD_PRODUCT_SCREEN];
