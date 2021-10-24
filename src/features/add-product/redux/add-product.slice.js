import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { addProductApi } from '../api/add-product.api';

export const addProduct = createAsyncThunk(
  'product_add/add',
  async (newProduct) => {
    const response = await addProductApi.addProduct(newProduct);
    console.log('product mới ', response);
  }
);

const initialState = {
  data: [],
  loaded: false,
};
const ProductAddSlice = createSlice({
  name: 'product_add',
  initialState,
  extraReducers: {
    [addProduct.fulfilled]: (state, action) => {},
    [addProduct.rejected]: (state, action) => {},
  },
});
const { reducer: productAddReducer } = ProductAddSlice;

export default productAddReducer;
