import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { UpdateProductApi } from '../api/update-product.api';
// danh mục

export const getDetailProduct = createAsyncThunk(
  'product-update/getDetailProduct',
  async (id) => {
    try {
      const response = await UpdateProductApi.getDetail(id);
      return response.data;
    } catch (error) {}
  }
);
export const removeImage = createAsyncThunk(
  'product-add/delete_image',
  async (url_image) => {
    await UpdateProductApi.removeImage(url_image);
  }
);
export const UpdateProduct = createAsyncThunk("product-update/update", async (data,{rejectWithValue})=>{
  try {
  const response = await UpdateProductApi.updateProduct(data)
    return response
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})
const initialState = {
  productDetail: null,
  loading: false,
};
const ProductUpdateSlice = createSlice({
  name: 'product-update',
  initialState,
  extraReducers: {

    [getDetailProduct.pending]: (state) => {
      state.loading = true;
    },
    [getDetailProduct.fulfilled]: (state, action) => {
      state.loading = true;
      state.productDetail = action.payload?.data;
      if(action.payload?.data || !action.payload){
        state.loading = false;
      }
    },
    [getDetailProduct.rejected]: (state) => {
      state.loading = false;
    },
  },
});
const { reducer: productUpdateReducer } = ProductUpdateSlice;

export default productUpdateReducer;
