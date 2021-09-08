import React, { memo, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ROUTE_LIST } from './routes.config'
import DefaultLayout from './../layouts/DefaultLayout/DefaultLayout'

const RouterWrap = ({ component: Component, layout, path }) => {
  const RouteLayout = layout || DefaultLayout

  return (
    <Route
      exact
      path={path}
      render={(props) => {
        const Content = () => {
          return (
            <RouteLayout>
              <Component {...props} />
            </RouteLayout>
          )
        }
        return <Content />
      }}
    />
  )
}

const Routes = () => {
  return (
    <Suspense loading={null} fallback={<div>loading ...</div>}>
      <Switch>
        {ROUTE_LIST.map((router) => {
          return <RouterWrap key={router.id} {...router} />
        })}
      </Switch>
    </Suspense>
  )
}

export default memo(Routes)
