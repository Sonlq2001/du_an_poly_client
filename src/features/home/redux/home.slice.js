import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { homeApi } from './../api/home.api';

export const getProducts = createAsyncThunk(
  'home/getProducts',
  async (params) => {
    try {
      const response = await homeApi.getProducts(params);
      return response.data;
    } catch (error) {}
  }
);

export const getProductMajor = createAsyncThunk(
  'home/productMajors',
  async (id) => {
    try {
      const response = await homeApi.productMajor(id);
      return response.data;
    } catch (error) {}
  }
);
export const searchData = createAsyncThunk('home/searchData', async (data) => {
  try {
    const response = await homeApi.searchData(data);
    return response.data;
  } catch (error) {}
});

const initialState = {
  productsHome: [],
  isProductsHomeLoading: false,

  dataSearch: [],
  isDataSearchLoading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: {
    // list product
    [getProducts.pending]: (state) => {
      state.isProductsHomeLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isProductsHomeLoading = false;
      state.productsHome = action.payload?.data;
    },
    [getProducts.rejected]: (state) => {
      state.isProductsHomeLoading = false;
    },

    // search main
    [searchData.pending]: (state) => {
      state.isDataSearchLoading = true;
    },
    [searchData.fulfilled]: (state, action) => {
      state.isDataSearchLoading = false;
      state.dataSearch = action.payload?.data;
    },
    [searchData.rejected]: (state) => {
      state.isDataSearchLoading = false;
    },
    // produt major
    [getProductMajor.pending]: (state) => {},
    [getProductMajor.fulfilled]: (state, action) => {},
    [getProductMajor.rejected]: (state, action) => {},
  },
});

const { reducer: homeReducer } = homeSlice;

export default homeReducer;
