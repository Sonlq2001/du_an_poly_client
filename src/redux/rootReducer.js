import { combineReducers } from '@reduxjs/toolkit';

import homeReducer from 'features/home/redux/home.slice';
import authReducer from 'features/auth/redux/auth.slice';
import categoryReducer from 'features/category/redux/category.slice';
import detailProductReducer from 'features/detail/redux/detail.slice';
import productAddReducer from 'features/add-product/redux/add-product.slice';
import ProfileReducer from 'features/profile/redux/profile.slice';
import masterDataReducer from 'features/master-data/redux/master-data.slice';
import productUpdateReducer from 'features/update-product/redux/update-product.slice';

const rootReducer = combineReducers({
  detailProduct: detailProductReducer,
  auth: authReducer,
  home: homeReducer,
  category: categoryReducer,
  addProduct: productAddReducer,
  userProfile: ProfileReducer,
  masterData: masterDataReducer,
  updateProduct: productUpdateReducer,
});

export default rootReducer;
