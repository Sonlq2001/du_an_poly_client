import { HOME_ROUTES } from './../features/home/routes/home.routes';
import { ABOUT_ROUTES } from './../features/about/routes/about.routes';
import { CATEGORY_ROUTES } from './../features/category/routes/category.routes';

export const ROUTE_LIST = [...CATEGORY_ROUTES, ...ABOUT_ROUTES, ...HOME_ROUTES];
