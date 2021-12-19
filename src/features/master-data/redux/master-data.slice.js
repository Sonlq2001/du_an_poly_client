import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { masterDataApi } from './../api/master-data.api';

export const getCampuses = createAsyncThunk(
  'master-data/getCampuses',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await masterDataApi.getCampuses();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const getSubjects = createAsyncThunk(
  'master-data/getSubjects',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await masterDataApi.getSubjects();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const getProductType = createAsyncThunk(
  'master-data/getProductType',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await masterDataApi.getProductType();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  // campus
  listCampus: [],
  isListCampusLoading: false,

  // subject
  listSubject: [],
  isListSubjectLoading: false,

  // product type
  listProductType: [],
  isListProductTypeLoading: false,
};

const masterDataSlice = createSlice({
  name: 'master-data',
  initialState,
  extraReducers: {
    // campus
    [getCampuses.pending]: (state) => {
      state.isListCampusLoading = true;
    },
    [getCampuses.fulfilled]: (state, action) => {
      state.isListCampusLoading = false;
      state.listCampus = action.payload?.campuses;
    },
    [getCampuses.rejected]: (state) => {
      state.isListCampusLoading = false;
    },

    // subject
    [getSubjects.pending]: (state) => {
      state.isListSubjectLoading = true;
    },
    [getSubjects.fulfilled]: (state, action) => {
      state.isListSubjectLoading = false;
      state.listSubject = action.payload?.data;
    },
    [getSubjects.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },

    // product type
    [getProductType.pending]: (state) => {
      state.listProductType = true;
    },
    [getProductType.fulfilled]: (state, action) => {
      state.listProductType = false;
      state.listProductType = action.payload?.product_types;
    },
    [getProductType.rejected]: (state) => {
      state.listProductType = false;
    },
  },
});

const { reducer: masterDataReducer } = masterDataSlice;

export default masterDataReducer;
