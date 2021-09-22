import { lazy } from 'react';
const AddProduct = lazy(() => import('../screens/productAddScreens'));
const PRODUCTADD_ROUTES = {
  id: 'id_addProduct',
  path: '/product/add',
  component: AddProduct,
};
export const ADDPRO_ROUTES = [PRODUCTADD_ROUTES];
