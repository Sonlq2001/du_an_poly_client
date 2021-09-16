import { HOME_ROUTES } from './../features/home/routes/home.routes';
import { ABOUT_ROUTES } from './../features/about/routes/about.routes';
import { PROFILE_ROUTES } from '../features/profile/routes/profile.routes';
import { CATEGORY_ROUTES } from './../features/category/routes/category.routes';
import { PAGE404_ROUTES } from './../features/page404/routes/page404.routes';

export const ROUTE_LIST = [
  ...CATEGORY_ROUTES,
  ...HOME_ROUTES,
  ...PROFILE_ROUTES,
  ...ABOUT_ROUTES,
  ...PAGE404_ROUTES,
];
