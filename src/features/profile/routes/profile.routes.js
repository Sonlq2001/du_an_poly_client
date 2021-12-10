import { lazy } from 'react';
import { PROFILE_PATHS } from './../constants/profile.paths';
const ProfileScreens = lazy(() => import('../screens/ProfileScreens'));

const PROFILE_SCREEN = {
  id: 'id_profile',
  path: PROFILE_PATHS.PROFILE,
  component: ProfileScreens,
  titlePage: 'Thông tin cá nhân',
};
export const PROFILE_ROUTES = [PROFILE_SCREEN];
