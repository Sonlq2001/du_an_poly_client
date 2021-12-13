import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { UpdateProductApi } from '../api/update-product.api';
// danh mục 
export const getProductTypes =  createAsyncThunk("product-update/productTypes",async ()=>{
    try {
        const response = await  UpdateProductApi.getProductTypes()
        console.log("vô đây", response)
    } catch (error) {
      
    }
})
// chi tiết sản phẩm 
export const getDetailProduct = createAsyncThunk("product-update/detailproduct", async(id)=>{
  try {
      const response = await  UpdateProductApi.getDetail(id)
      return response.data
  } catch (error) {
    
  }
})
// xoá ảnh dại diện 
export const removeImage = createAsyncThunk(
  'product-add/delete_image',
  async (url_image) => {
    await UpdateProductApi.removeImage(url_image);
  }
);
const initialState = {
  productDetail : "",
  loading : false,
  productType : []
};
const ProductUpdateSlice = createSlice({
  name: 'product-update',
  initialState,
  extraReducers: {
    // product types
    // chi tiết
    [getDetailProduct.pending] : state =>{
      state.loading = true
    },
    [getDetailProduct.fulfilled] : (state,action) =>{
      state.loading = false
      state.productDetail = action.payload.data
    },
    [getDetailProduct.rejected] : state =>{
      state.loading = false
    }
  },
});
const { reducer: productUpdateReducer } = ProductUpdateSlice;

export default productUpdateReducer;
