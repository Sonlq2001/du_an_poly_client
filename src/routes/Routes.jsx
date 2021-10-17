import React, { memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loading from './../components/Loading/Loading';
import { ROUTE_LIST } from './routes.config';
import DefaultLayout from './../layouts/DefaultLayout/DefaultLayout';

const RouterWrap = ({ component: Component, layout, path, exact }) => {
  const RouteLayout = layout || DefaultLayout;
  const isExact = exact ? true : false;
<<<<<<< HEAD
=======
  const { accessToken } = useSelector((state) => state.auth);

  // if (accessToken) {
  //   return <Redirect to="/" />;
  // }

>>>>>>> 3839e09a9435c883b578ed4dad1239211ce48657
  return (
    <Route
      exact={isExact}
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
          return <RouterWrap key={router.id} {...router} />;
        })}
      </Switch>
    </Suspense>
  );
};

export default memo(Routes);
