import { lazy } from 'react';

const Page404Screen = lazy(() => import('./../screens/Page404Screens'));
const Layout404 = lazy(() => import('./../layouts/Layout404'));

const PAGE404_SCREEN = {
  id: 'id_page4040',
  path: '*',
  component: Page404Screen,
  layout: Layout404,
  titlePage: 'Địa chị không hợp lê',
};

export const PAGE404_ROUTES = [PAGE404_SCREEN];
