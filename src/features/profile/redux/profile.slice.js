import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileApi } from './../api/profile.api';
export const getData = createAsyncThunk('profile/products', async (id) => {
  try {
    const response = await ProfileApi.getProducts(id);
    return response.data;
  } catch (error) {}
});
export const getProfile = createAsyncThunk('profile/get', async (id) => {
  try {
    const response = await ProfileApi.getDetails(id);
   
    return response.data.user;
  } catch (error) {}
});
const initialState = {
  product: [],
  loading: false,
  profile: {},
  productUnactive:[]
};
const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    convertData: (state) => {
      state.productUnactive = state.product.filter((item)=>  item.status === 0)
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    [getData.pending]: (state) => {
      state.loading = false;
    },
    // lấy profile
    [getProfile.pending]: (state) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
    },
    [getProfile.pending]: (state) => {
      state.loading = false;
    },
  },
});
export const { convertData } = ProfileSlice.actions;
const { reducer: ProfileReducer } = ProfileSlice;
export default ProfileReducer;
