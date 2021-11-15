import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from './../api/auth.api';

export const postLogin = createAsyncThunk('auth/postLogin', async (data) => {
  const response = await authApi.getAccessToken(data);
  return response.data;
});

export const postLogout = createAsyncThunk('auth/postLogout', async () => {
  await authApi.postLogout();
});
export const getCampuses = createAsyncThunk('auth/abc', async () => {
  try {
    const response = await authApi.fetChCampuses();
    return response.data.campuses;
  } catch (error) {}
});
const initialState = {
  accessToken: null,
  userLogin: null,
  listCampuses: [],
  loading: false,
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
      if (action?.payload?.user !== null) {
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
    [getCampuses.pending]: (state) => {
      state.loading = true;
    },
    [getCampuses.fulfilled]: (state, action) => {
      state.listCampuses = action.payload;
      state.loading = false;
    },
    [getCampuses.rejected]: (state) => {
      state.loading = false;
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
