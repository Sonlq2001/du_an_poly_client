import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from './../api/auth.api';

export const postLogin = createAsyncThunk(
  'auth/postLogin',
  async (accessToken) => {
    const response = await authApi.getAccessToken({
      access_token: accessToken,
    });
    return response.data;
  }
);

export const postLogout = createAsyncThunk('auth/postLogout', async () => {
  await authApi.postLogout();
});

const initialState = {
  accessToken: null,
  userLogin: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [postLogin.pending]: (state) => {
      state.accessToken = null;
      state.userLogin = null;
    },
    [postLogin.fulfilled]: (state, action) => {
      if (action.payload?.user !== null) {
        const { avatar, email } = action.payload?.user;
        state.accessToken = action.payload.access_token;
        state.userLogin = { avatar, email };
      }
    },
    [postLogin.rejected]: (state) => {
      state.accessToken = null;
      state.userLogin = null;
    },
    [postLogout.fulfilled]: (state) => {
      state.accessToken = null;
      state.userLogin = null;
    },
    [postLogout.rejected]: (state) => {
      state.accessToken = null;
      state.userLogin = null;
    },
  },
});

const { reducer } = authSlice;
const authConfig = {
  key: 'auth',
  storage,
  whiteList: ['accessToken', 'userLogin'],
};

const authReducer = persistReducer(authConfig, reducer);

export default authReducer;
