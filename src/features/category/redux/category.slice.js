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

const initialState = {
  isLoadingProducts: false,
  listProduct: [],

  listMajors: [],
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
  },
});

const { reducer: categoryReducer } = categorySlice;

export default categoryReducer;
