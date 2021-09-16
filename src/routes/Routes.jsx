import React, { memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from './../components/Loading/Loading';

import { ROUTE_LIST } from './routes.config';
import DefaultLayout from './../layouts/DefaultLayout/DefaultLayout';

const RouterWrap = ({ component: Component, layout, path }) => {
  const RouteLayout = layout || DefaultLayout;

  return (
    <Route
      path={path}
      render={(props) => {
        const Content = () => {
          return (
            <RouteLayout>
              <Component {...props} />
            </RouteLayout>
          );
        };
        return <Content />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {ROUTE_LIST.map((router) => {
          return <RouterWrap exact key={router.id} {...router} />;
        })}

        {/* <Route path="*">page 404</Route> */}
      </Switch>
    </Suspense>
  );
};

export default memo(Routes);
