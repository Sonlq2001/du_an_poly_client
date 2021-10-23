import { combineReducers } from '@reduxjs/toolkit';
import subjectReducer from '../features/add-product/redux/productTypeReducer';

import authReducer from './../features/auth/redux/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  ListProTypes: subjectReducer,
});

export default rootReducer;
