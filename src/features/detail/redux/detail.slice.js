import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { detailProductApi } from './../api/detail.api';

export const getDetailProduct = createAsyncThunk(
  'detail/getDetailProduct',
  async (id) => {
    try {
      const response = await detailProductApi.getProductDetail(id);
      return response.data;
    } catch (error) {}
  }
);

const initialState = {
  detailProduct: null,
  isLoadingDetailProduct: false,
};

const detailProductSlice = createSlice({
  name: 'detail product',
  initialState,
  extraReducers: {
    [getDetailProduct.pending]: (state) => {
      state.isLoadingDetailProduct = true;
    },
    [getDetailProduct.fulfilled]: (state, action) => {
      state.isLoadingDetailProduct = false;
      state.detailProduct = action.payload.data;
    },
    [getDetailProduct.rejected]: (state) => {
      state.isLoadingDetailProduct = true;
    },
  },
});

const { reducer: detailProductReducer } = detailProductSlice;

export default detailProductReducer;
