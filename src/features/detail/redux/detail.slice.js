import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _get from 'lodash.get';
import { detailProductApi } from './../api/detail.api';

export const getDetailProduct = createAsyncThunk(
  'detail/getDetailProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.getProductDetail(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postProductRating = createAsyncThunk(
  'detail/postProductRating',
  async (countRating) => {
    try {
      const response = await detailProductApi.postProductRating(countRating);
      console.log(response);
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
      state.detailProduct = null;
      state.isLoadingDetailProduct = false;
    },
  },
});

const { reducer: detailProductReducer } = detailProductSlice;

export default detailProductReducer;
