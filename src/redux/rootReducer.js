import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './../features/auth/redux/auth.slice';
import categoryReducer from './../features/category/redux/category.slice';
import detailProductReducer from './../features/detail/redux/detail.slice';
import productAddReducer from './../features/add-product/redux/add-product.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  detailProduct: detailProductReducer,
  addProduct: productAddReducer,
});

export default rootReducer;
