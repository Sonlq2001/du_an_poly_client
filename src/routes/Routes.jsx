import React, { memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Loading from './../components/Loading/Loading';
import { ROUTE_LIST } from './routes.config';
import DefaultLayout from './../layouts/DefaultLayout/DefaultLayout';
import store from './../redux/store';
import { ROOT_ROUTE, SIGN_IN_ROUTE } from './../routes/routes.config';
// import { ADD_PRODUCT_PATHS } from 'features/add-product/constants/add-product.paths';

const RouterWrap = ({
  component: Component,
  layout,
  path,
  exact,
  isAuth,
  isPrivateRoute,
}) => {
  const RouteLayout = layout || DefaultLayout;
  const isExact = exact ? true : false;
  const isPrivate = isPrivateRoute || false;
  const isSigned = store.getState().auth.accessToken;

  // if (path === ADD_PRODUCT_PATHS.ADD_PRODUCT || !isSigned) {
  //   history.goBack();
  //   // return history.push('/product/update/asdf');
  // }

  if (!isSigned && isPrivate) {
    return <Redirect key="SIGN_IN_ROUTE" to={{ SIGN_IN_ROUTE }} />;
  }

  if (isSigned && isAuth) {
    return <Redirect key="ROOT_ROUTE" to={ROOT_ROUTE} />;
  }

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
