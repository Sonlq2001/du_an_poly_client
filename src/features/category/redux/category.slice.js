import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { categoryApi } from './../api/category.api';

export const getProductMajor = createAsyncThunk(
  'category/productMajors',
  async (id) => {
    try {
      const response = await categoryApi.productMajor(id);
      return response.data;
    } catch (error) {}
  }
);
export const getMajors = createAsyncThunk('category/getMajors', async () => {
  try {
    const response = await categoryApi.getMajors();
    return response.data;
  } catch (error) {}
});
export const getSubjects = createAsyncThunk(
  'category/subjectMajor',
  async (id) => {
    try {
      const response = await categoryApi.getSubject(id);
      return response.data.data;
    } catch (error) {}
  }
);
export const getTeacher = createAsyncThunk(
  'categoory/teacher',
  async (data) => {
    try {
      const response = await categoryApi.teacherApi(data);
      return response.data;
    } catch (error) {
      console.log('lỗi này', error.response);
    }
  }
);
export const productFilter = createAsyncThunk(
  'category/filterProduct',
  async (data) => {
    try {
      const response = await categoryApi.filterProduct(data);
      return response.data;
    } catch (error) {
      console.log('lỗi', error);
    }
  }
);
export const seachProduct = createAsyncThunk(
  'category/seachProduct',
  async (data) => {
    try {
      const response = await categoryApi.seachCategory(data);
      return response.data;
    } catch (error) {}
  }
);
export const sortProduct = createAsyncThunk(
  'category/sortProduct',
  async (data) => {
    try {
      const response = await categoryApi.sortCategory(data);
      return response.data;
    } catch (error) {}
  }
);
const initialState = {
  loading: false,
  isProductLoading: false,
  listSubject: [],
  productMajor: null,
  listTeacher: [],
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
    [getProductMajor.pending]: (state) => {
      state.loading = true;
      state.isProductLoading = true;
    },
    [getProductMajor.fulfilled]: (state, action) => {
      state.productMajor = action.payload?.data?.filter(item=> item?.status === 3);
      state.isProductLoading = true;
      state.loading = true;
      if (action.payload?.data) {
        state.isProductLoading = false;
        state.loading = false;
      }
    },
    [getProductMajor.rejected]: (state) => {
      state.productMajor = [];
      state.loading = false;
      state.isProductLoading = false;
    },
    // giangr viên
    [getTeacher.pending]: (state) => {
      state.loading = false;
    },
    [getTeacher.fulfilled]: (state, action) => {
      state.listTeacher = action.payload?.data;
      state.loading = false;
    },
    [getTeacher.rejected]: (state) => {
      state.listTeacher = [];
      state.loading = false;
    },
    [productFilter.pending]: (state) => {
      state.loading = true;
      state.isProductLoading = true;
    },
    [productFilter.fulfilled]: (state, action) => {
      state.productMajor = action.payload?.data;
      state.isProductLoading = true;
      if (action.payload?.data) {
        state.isProductLoading = false;
        state.loading = false;
      }
    },
    [productFilter.rejected]: (state) => {
      state.productMajor = [];
      state.loading = false;
      state.isProductLoading = false;
    },
    // seach tìm kiêm
    [seachProduct.pending]: (state) => {
      state.loading = true;
    },
    [seachProduct.fulfilled]: (state, action) => {
      state.productMajor = action.payload?.data;
      state.loading = true;
      state.isProductLoading = true;
      if (action.payload.data || !action.payload.data) {
        state.isProductLoading = false;
        state.loading = false;
      }
    },
    [seachProduct.rejected]: (state) => {
      state.loading = false;
      state.productMajor = [];
    },
    // sắp xếp
    [sortProduct.pending]: (state) => {
      state.loading = true;
      state.isProductLoading = true;
    },
    [sortProduct.fulfilled]: (state, action) => {
      state.productMajor = action.payload?.data;
      state.isProductLoading = true;
      state.loading = true;
      if (action.payload.data) {
        state.loading = false;
        state.isProductLoading = false;
      }
    },
    [sortProduct.rejected]: (state) => {
      state.isProductLoading = false;
      state.productMajor = [];
      state.loading = false;
    },
  },
});

const { reducer: categoryReducer } = categorySlice;

export default categoryReducer;
