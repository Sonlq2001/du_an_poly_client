import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { addProductApi } from '../api/add-product.api';

export const postAddProduct = createAsyncThunk(
  'add-product/postProduct',
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
  'add-product/getInfo',
  async (product_token, { rejectWithValue }) => {
    try {
      const response = await addProductApi.getInfo(product_token);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'message', ''));
    }
  }
);

export const getProductTypes = createAsyncThunk(
  'add-product/getProductTypes',
  async () => {
    try {
      const response = await addProductApi.getProductTypes();
      return response.data;
    } catch (error) {}
  }
);

export const removeImage = createAsyncThunk(
  'product-add/delete_image',
  async (url_image, { rejectWithValue }) => {
    try {
      await addProductApi.removeImage(url_image);
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const removeDocument = createAsyncThunk(
  'product-add/delete_image',
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
const ProductAddSlice = createSlice({
  name: 'product-add',
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

    // get info user teacher
    [getInfo.pending]: (state) => {
      state.isInfoProductLoading = true;
    },
    [getInfo.fulfilled]: (state, action) => {
      state.infoProduct = action.payload;
      state.isInfoProductLoading = false;
    },
    [getInfo.rejected]: (state) => {
      state.isInfoProductLoading = false;
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
const { reducer: productAddReducer } = ProductAddSlice;

export default productAddReducer;
