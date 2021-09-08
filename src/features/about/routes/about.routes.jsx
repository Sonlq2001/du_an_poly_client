import { lazy } from 'react'
const AboutScreen = lazy(() => import('./../screens/AboutScreen/AboutScreen'))

const ABOUT_SCREEN = {
  id: 'id_about',
  path: '/about',
  component: AboutScreen,
}

export const ABOUT_ROUTES = [ABOUT_SCREEN]
