import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { profileApi } from './../api/profile.api';

export const getProductUser = createAsyncThunk(
  'profile/getProductUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await profileApi.getProductsUser(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (id, { rejectWithValue }) => {
    try {
      const response = await profileApi.getDetails(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  productActive: [],
  isProductActiveLoading: false,

  isProfileLoading: false,
  profile: null,
};
const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    // product user
    [getProductUser.pending]: (state) => {
      state.isProductActiveLoading = true;
    },
    [getProductUser.fulfilled]: (state, action) => {
      state.productActive = action.payload;
      state.isProductActiveLoading = false;
    },
    [getProductUser.rejected]: (state) => {
      state.isProductActiveLoading = false;
    },
    // get profile
    [getProfile.pending]: (state) => {
      state.isProfileLoading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.isProfileLoading = false;
      state.profile = action.payload?.user;
    },
    [getProfile.rejected]: (state) => {
      state.isProfileLoading = false;
    },
  },
});

export const { convertData } = ProfileSlice.actions;
const { reducer: ProfileReducer } = ProfileSlice;
export default ProfileReducer;
