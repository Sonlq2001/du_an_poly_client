import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

const { reducer } = authSlice;
const authConfig = {
  key: 'auth',
  storage,
  whiteList: ['accessToken'],
};

const authReducer = persistReducer(authConfig, reducer);

export default authReducer;
