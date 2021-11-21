import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { masterDataApi } from './../api/master-data.api';

export const getCampuses = createAsyncThunk(
  'master-data/getCampuses',
  async () => {
    try {
      const response = await masterDataApi.getCampuses();
      return response.data;
    } catch (error) {}
  }
);

const initialState = {
  listCampus: [],
  isListCampusLoading: false,
};

const masterDataSlice = createSlice({
  name: 'master-data',
  initialState,
  extraReducers: {
    [getCampuses.pending]: (state) => {
      state.isListCampusLoading = true;
    },
    [getCampuses.fulfilled]: (state, action) => {
      state.isListCampusLoading = false;
      state.listCampus = action.payload.campuses;
    },
    [getCampuses.rejected]: (state) => {
      state.isListCampusLoading = false;
    },
  },
});

const { reducer: masterDataReducer } = masterDataSlice;

export default masterDataReducer;
