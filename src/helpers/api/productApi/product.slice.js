import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { productApi } from './product.api';

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  try {
 await  productApi.getProducts();
  } catch (error) {}
});

const initialState = {
  listProduct: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {},
});

const { reducer: productReducer } = productSlice;

export default productReducer;
