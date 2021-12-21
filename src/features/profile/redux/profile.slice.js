import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { profileApi } from './../api/profile.api';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (id, { rejectWithValue }) => {
    try {
      const response = await profileApi.getProfileUser(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  isProfileLoading: false,
  profile: null,
};
const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    // product user
    [getProfile.pending]: (state) => {
      state.isProfileLoading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profile = action.payload?.data;
      state.isProfileLoading = false;
    },
    [getProfile.rejected]: (state) => {
      state.isProfileLoading = false;
    },
  },
});

export const { convertData } = ProfileSlice.actions;
const { reducer: ProfileReducer } = ProfileSlice;
export default ProfileReducer;
