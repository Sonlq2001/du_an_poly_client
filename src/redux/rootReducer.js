import { combineReducers } from '@reduxjs/toolkit';
import subjectReducer from '../features/add-product/redux/productTypeReducer';

import authReducer from './../features/auth/redux/auth.slice';
import categoryReducer from './../features/category/redux/category.slice';
import detailProductReducer from './../features/detail/redux/detail.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  listProTypes: subjectReducer,
  category: categoryReducer,
  detailProduct: detailProductReducer,
});

export default rootReducer;
