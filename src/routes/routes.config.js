import { HOME_ROUTES } from './../features/home/routes/home.routes';
import { ABOUT_ROUTES } from './../features/about/routes/about.routes';
import { PROFILE_ROUTES } from '../features/profile/routes/profile.routes';
export const ROUTE_LIST = [...PROFILE_ROUTES, ...ABOUT_ROUTES, ...HOME_ROUTES];
