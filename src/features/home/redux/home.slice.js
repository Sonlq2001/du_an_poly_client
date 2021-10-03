import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { homeApi } from './../api/home.api';

export const fetchData = createAsyncThunk('home/fetchData', async () => {
  await homeApi.getData();
});

const initialState = {
  data: [],
  loading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: {},
});

const { reducer: homeReducer } = homeSlice;

export default homeReducer;
