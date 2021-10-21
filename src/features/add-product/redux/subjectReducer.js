import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubject } from '../api/product.api';
export const getData = createAsyncThunk('subject', async () => {
  const response = await getSubject();
  console.log('subject lits', response);
});
const initialState = {
  listSubject: null,
};
const subjectSlice = createSlice({
  name: 'subject',
  initialState,
});
const { reducer: subjectReducer } = subjectSlice;
export default subjectReducer;
