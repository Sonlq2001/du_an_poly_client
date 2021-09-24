import { lazy } from 'react';
const AddProductScreen = lazy(() => import('./../screens/addproductScreen'));
const ADDPRO_SCREEN = {
  id: 'id_product_add',
  path: '/product/add',
  component: AddProductScreen,
};
export const ADDPRO_ROUTES = [ADDPRO_SCREEN];
