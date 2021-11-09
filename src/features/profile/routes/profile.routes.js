import { lazy } from 'react';
const ProfileScreens = lazy(() => import('../screens/ProfileScreens'));
const PROFILE_SCREEN = {
  id: 'id_profile',
  path: '/profile/:id',
  component: ProfileScreens,
};
export const PROFILE_ROUTES = [PROFILE_SCREEN];
