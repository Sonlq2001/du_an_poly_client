import { lazy } from 'react';
const ProflieScreens = lazy(() => import('../screens/ProflieScreens'));
const PROFILE_SCREEN = {
  id: 'id_proflie',
  path: '/proflie',
  component: ProflieScreens,
};
export const PROFILE_ROUTES = [PROFILE_SCREEN];
