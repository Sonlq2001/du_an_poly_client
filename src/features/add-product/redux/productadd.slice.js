import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addPro } from './../api/prouduct_add.api';
export const addProduct = createAsyncThunk(
  'product_add',
  async (newProduct) => {
    const response = await addPro(newProduct);
    console.log('ở đây response', response);
  }
);
const initialState = {
  data: [],
  loaded: false,
};
const ProductAddSlice = createSlice({
  name: 'product_add',
  initialState,
  extraReducers: {},
});
const { reducer: productAddReducer } = ProductAddSlice;

export default productAddReducer;
