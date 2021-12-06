import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { categoryApi } from './../api/category.api';

export const getProductMajor = createAsyncThunk("category/productMajors", async (id)=>{
       try {
        const response = await categoryApi.productMajor(id)
        return  response.data
       } catch (error) {

       }
})
export const getMajors = createAsyncThunk('category/getMajors', async () => {
  try {
    const response = await categoryApi.getMajors();
    return response.data;
  } catch (error) {}
});
export const getSubjects = createAsyncThunk('category/subjectMajor', async (id) => {
  try {
    const response = await categoryApi.getSubject(id);
    return response.data.data;
  } catch (error) {
    console.log("lỗi",error)
  }
});
export const getTeacher = createAsyncThunk("categoory/teacher", async (data)=>{
      try {
            const response = await categoryApi.teacherApi(data)
            return response.data
      } catch (error) {
          console.log("lỗi này ")
      }
})
export const productFilter = createAsyncThunk("category/filterProduct", async (data)=>{
          try {
          const response = await categoryApi.filterProduct(data)
                console.log("response ở đây", response)
          } catch (error) {
              console.log("lỗi", error)
          }
})

const initialState = {
  loading: false,
  listSubject : [],
  productMajor : [],
  listTeacher : []
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [getSubjects.fulfilled]: (state, action) => {
      state.listSubject = action.payload;
    },
    [getSubjects.rejected]: (state) => {
      state.listSubject = [];
    },
  // product major 
  [getProductMajor.pending] : (state)=>{
    state.loading =  true
  },
    [getProductMajor.fulfilled]: (state,action) => {
      state.loading =  false
      state.productMajor = action.payload.data
    },
    [getProductMajor.rejected]: (state,action) => {
      state.loading =  false
      state.productMajor = []
    },
    [getTeacher.fulfilled] :(state,action)=>{
        state.listTeacher = action.payload.data
    },
    [getTeacher.rejected] :(state)=>{
        state.listTeacher = []
    },
  },
});

const { reducer: categoryReducer } = categorySlice;

export default categoryReducer;
