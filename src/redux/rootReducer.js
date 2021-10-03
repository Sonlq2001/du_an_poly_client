import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './../features/auth/redux/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
