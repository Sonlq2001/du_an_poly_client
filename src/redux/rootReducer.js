import { combineReducers } from '@reduxjs/toolkit';
import subjectReducer from '../features/add-product/redux/productTypeReducer';

import authReducer from './../features/auth/redux/auth.slice';
import categoryReducer from './../features/category/redux/category.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  ListProTypes: subjectReducer,
  category: categoryReducer,
});

export default rootReducer;
