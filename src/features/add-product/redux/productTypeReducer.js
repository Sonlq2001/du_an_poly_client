import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductType } from '../api/add-product.api';
export const getData = createAsyncThunk('subject', async () => {
  const response = await getProductType();
  return response.data.product_types;
});
const initialState = {
  productTypes: null,
};
const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.productTypes = action.payload;
    },
    [getData.rejected]: (state, action) => {
      console.log('lỗi ');
    },
  },
});
const { reducer: subjectReducer } = subjectSlice;
export default subjectReducer;
