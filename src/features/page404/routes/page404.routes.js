import { lazy } from 'react';
const Page404 = lazy(() => import('../layout/Page404'));
const PAGE40_SCEEN = {
  id: 'id_page404',
  path: '*',
  layout: Page404,
};
export const PAGE404_ROUTERS = [PAGE40_SCEEN];
