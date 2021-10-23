import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './../features/auth/redux/auth.slice';
import categoryReducer from './../features/category/redux/category.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
});

export default rootReducer;
