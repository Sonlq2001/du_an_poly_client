import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from './../api/auth.api';

export const loginSocial = createAsyncThunk('auth/loginSocial', async () => {
  await authApi.loginSocial();
});

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
