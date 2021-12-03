import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addProductApi } from '../api/update-product.api';

export const postAddProduct = createAsyncThunk(
  'product-update/postProduct',
  async (value, { rejectWithValue }) => {
    try {
      const response = await addProductApi.addProduct(value);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getInfo = createAsyncThunk(
  'product-update/getInfo',
  async (product_token) => {
    try {
      const response = await addProductApi.getInfo(product_token);
      return response.data;
    } catch (error) {}
  }
);

export const getProductTypes = createAsyncThunk(
  'product-update/getProductTypes',
  async () => {
    try {
      const response = await addProductApi.getProductTypes();
      return response.data;
    } catch (error) {}
  }
);
export const removeImage = createAsyncThunk(
  'product-update/delete_image',
  async (url_image) => {
    await addProductApi.removeImage(url_image);
  }
);
export const removeDocument = createAsyncThunk(
  'product-update/delete_image',
  async (resource_url) => {
    await addProductApi.removeDocument(resource_url);
  }
);

const initialState = {
  // product finished successfully
  productFinished: null,
  isProductFinishedLoading: false,

  // info product
  infoProduct: {},
  isInfoProductLoading: false,

  // product types
  isProductTypesLoading: false,
  productTypes: [],
};
const ProductUpdateSlice = createSlice({
  name: 'product-update',
  initialState,
  extraReducers: {
    [postAddProduct.pending]: (state) => {
      state.isProductFinishedLoading = true;
    },
    [postAddProduct.fulfilled]: (state, action) => {
      state.isProductFinishedLoading = false;
      state.productFinished = action.payload.data;
    },
    [postAddProduct.rejected]: (state) => {
      state.isProductFinishedLoading = false;
    },

    [getInfo.fulfilled]: (state, action) => {
      state.isInfoProductLoading = false;
      state.infoProduct = action.payload;
    },
    [getInfo.rejected]: (state) => {
      state.isInfoProductLoading = true;
    },

    // product types
    [getProductTypes.pending]: (state) => {
      state.isProductTypesLoading = true;
    },
    [getProductTypes.fulfilled]: (state, action) => {
      state.isProductTypesLoading = false;
      state.productTypes = action.payload.product_types;
    },
  },
});
const { reducer: productUpdateReducer } = ProductUpdateSlice;

export default productUpdateReducer;
