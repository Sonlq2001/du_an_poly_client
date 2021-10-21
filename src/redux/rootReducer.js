import { combineReducers } from '@reduxjs/toolkit';
import subjectReducer from '../features/add-product/redux/subjectReducer';

import authReducer from './../features/auth/redux/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
});

export default rootReducer;
