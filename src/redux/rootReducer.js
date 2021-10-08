import { combineReducers } from '@reduxjs/toolkit';
import productAddReducer from '../features/add-product/redux/productadd.slice';

import authReducer from './../features/auth/redux/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  addproduct: productAddReducer,
});

export default rootReducer;
