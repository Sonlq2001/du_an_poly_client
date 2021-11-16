import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { categoryApi } from './../api/category.api';

export const getProducts = createAsyncThunk(
  'category/getProducts',
  async () => {
    try {
      const response = await categoryApi.getProducts();
      return response.data;
    } catch (error) {}
  }
);

export const getMajors = createAsyncThunk('category/getMajors', async () => {
  try {
    const response = await categoryApi.getMajors();
    return response.data;
  } catch (error) {}
});
export const getSubject = createAsyncThunk('category/getSubject', async () => {
  try {
    const response = await categoryApi.getSubject();
    return response.data;
  } catch (error) {}
});
const initialState = {
  isLoadingProducts: false,
  listProduct: [],
  listMajors: [],
  listSubject: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoadingProducts = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoadingProducts = false;
      state.listProduct = action.payload.data;
    },
    [getProducts.rejected]: (state) => {
      state.isLoadingProducts = false;
    },

    [getMajors.fulfilled]: (state, action) => {
      state.listMajors = action.payload.data;
    },
    [getMajors.rejected]: (state) => {
      state.listMajors = [];
    },
    [getSubject.fulfilled]: (state, action) => {
      state.listSubject = action.payload.data;
    },
    [getSubject.rejected]: (state, action) => {
      state.listSubject = action.payload.data;
    },
  },
});

const { reducer: categoryReducer } = categorySlice;

export default categoryReducer;
