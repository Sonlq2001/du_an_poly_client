import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileApi } from './../api/profile.api';

export const getData = createAsyncThunk('profile/getData', async (id) => {
  try {
    const response = await ProfileApi.getProducts(id);
    return response.data;
  } catch (error) {}
});

export const getProfile = createAsyncThunk('profile/getProfile', async (id) => {
  try {
    const response = await ProfileApi.getDetails(id);
    return response.data.user;
  } catch (error) {}
});

const initialState = {
  product: [],
  loadingProduct: false,
  loadingProflie :false,
  profile: null,
  productUnactive:[]
};
const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    convertData: (state) => {
      state.productUnactive = state.product && state.product.filter((item)=>  item.status === 0)
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loadingProduct = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loadingProduct = false;
    },
    [getData.pending]: (state) => {
      state.loadingProduct = false;
    },
    // lấy profile
    [getProfile.pending]: (state) => {
      state.loadingProflie = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profile = action.payload;
      state.loadingProflie = false;
    },
    [getProfile.pending]: (state) => {
      state.loadingProflie =false;
    },
  },
});

export const { convertData } = ProfileSlice.actions;
const { reducer: ProfileReducer } = ProfileSlice;
export default ProfileReducer;
