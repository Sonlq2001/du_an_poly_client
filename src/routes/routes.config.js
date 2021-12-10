import { HOME_ROUTES } from 'features/home/routes/home.routes';
import { ABOUT_ROUTES } from 'features/about/routes/about.routes';
import { PROFILE_ROUTES } from 'features/profile/routes/profile.routes';
import { CATEGORY_ROUTES } from 'features/category/routes/category.routes';
import { PAGE404_ROUTES } from 'features/page404/routes/page404.routes';
import { SIGN_IN_ROUTES } from 'features/auth/routes/auth.routes';
import { ADD_PRODUCT_ROUTES } from 'features/add-product/routes/add-product.routes';
import { DETAIL_ROUTES } from 'features/detail/routes/detail.routes';
import { SEARCH_ROUTES } from 'features/search/routes/search.routes';
// import {  UPDATE_PRODUCT_ROUTES}  from "features/update-product/routes/update-product.routes"
export const ROOT_ROUTE = '/';
export const SIGN_IN_ROUTE = '/sign-in';

export const ROUTE_LIST = [
  // ...UPDATE_PRODUCT_ROUTES,
  ...SEARCH_ROUTES,

  ...ADD_PRODUCT_ROUTES,
  ...SIGN_IN_ROUTES,
  ...CATEGORY_ROUTES,
  ...PROFILE_ROUTES,
  ...ABOUT_ROUTES,
  ...DETAIL_ROUTES,
  ...HOME_ROUTES,
  ...PAGE404_ROUTES,
];
