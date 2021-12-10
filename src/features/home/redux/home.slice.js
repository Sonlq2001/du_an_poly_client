import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { homeApi } from './../api/home.api';

export const fetchData = createAsyncThunk('home/fetchData', async () => {
  await homeApi.getData();
});
export const getProductMajor = createAsyncThunk("home/productMajors", async (id)=>{
  try {

   const response = await homeApi.productMajor(id)
   return  response.data
  } catch (error) {

  }
})
export const searchData = createAsyncThunk('home/searchData', async (data) => {
  try {
    const response = await homeApi.searchData(data);
    return response.data;
  } catch (error) {}
});

const initialState = {
  data: [],
  loading: false,
  dataSearch: [],
  isDataSearchLoading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: {
    [searchData.pending]: (state) => {
      state.isDataSearchLoading = true;
    },
    [searchData.fulfilled]: (state, action) => {
      state.isDataSearchLoading = false;
      state.dataSearch = action.payload.data;
    },
    [searchData.rejected]: (state) => {
      state.isDataSearchLoading = false;
    },
    // produt major
    [getProductMajor.pending]:  (state)=>{

    },
    [getProductMajor.fulfilled]:  (state,action)=>{

    },
    [getProductMajor.rejected]:  (state,action)=>{

    },
  },
});

const { reducer: homeReducer } = homeSlice;

export default homeReducer;
