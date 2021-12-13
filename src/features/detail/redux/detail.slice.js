import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _get from 'lodash.get';
import { detailProductApi } from './../api/detail.api';

export const getDetailProduct = createAsyncThunk(
  'detailProduct/getDetailProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.getProductDetail(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postProductRating = createAsyncThunk(
  'detail/postProductRating',
  async (countRating, { rejectWithValue }) => {
    try {
      await detailProductApi.postProductRating(countRating);
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const getCommentsOfProduct = createAsyncThunk(
  'detail/getComments',
  async (id, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.getCommentsOfProduct(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postComment = createAsyncThunk(
  'detail/postComment',
  async (comment, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.postComment(comment);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postCommentReply = createAsyncThunk(
  'detail/postCommentReply',
  async (comment, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.postCommentReply(comment);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const deleteCommentReply = createAsyncThunk(
  'detail/deleteCommentReply',
  async (id, { rejectWithValue }) => {
    try {
      await detailProductApi.deleteCommentReply(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const deleteComment = createAsyncThunk(
  'detail/deleteComment',
  async (id, { rejectWithValue }) => {
    try {
      await detailProductApi.deleteComment(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putComment = createAsyncThunk(
  'detail/putComment',
  async (comment, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.putComment(comment);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putCommentReply = createAsyncThunk(
  'detail/putCommentReply',
  async (comment, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.postCommentReply(comment);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const getCountStar = createAsyncThunk(
  'detail/getCountStar',
  async (id, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.getCountStar(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const getAvgStar = createAsyncThunk(
  'detail/getAvgStar',
  async (id, { rejectWithValue }) => {
    try {
      const response = await detailProductApi.getAvgStar(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  itemDetailProduct: null,
  isLoadingDetailProduct: false,

  listComment: [],
  isListCommentLoading: false,

  countStar: null,
  isCountStarLoading: null,
  starProduct: null,
  avgStar: null,
};

const detailProductSlice = createSlice({
  name: 'detail product',
  initialState,
  extraReducers: {
    [getDetailProduct.pending]: (state) => {
      state.isLoadingDetailProduct = true;
    },
    [getDetailProduct.fulfilled]: (state, action) => {
      state.isLoadingDetailProduct = false;
      state.itemDetailProduct = action.payload?.data;
      state.starProduct = action.payload?.star?.rating;
    },
    [getDetailProduct.rejected]: (state) => {
      state.isLoadingDetailProduct = false;
    },

    // list comment
    [getCommentsOfProduct.pending]: (state) => {
      state.isListCommentLoading = true;
    },
    [getCommentsOfProduct.fulfilled]: (state, action) => {
      state.isListCommentLoading = false;
      state.listComment = action.payload.data;
    },
    [getCommentsOfProduct.rejected]: (state) => {
      state.isListCommentLoading = false;
    },

    // comment
    [postComment.fulfilled]: (state, action) => {
      state.isListCommentLoading = false;
      state.listComment = [...state.listComment, action.payload.data];
    },
    [postComment.rejected]: (state) => {
      state.isListCommentLoading = false;
    },

    // reply comment
    [postCommentReply.fulfilled]: (state, action) => {
      state.isListCommentLoading = false;
      state.listComment = state.listComment.map((cmt) => {
        return {
          ...cmt,
          get_reply: [...cmt?.get_reply, action.payload?.reply],
        };
      });
    },
    [postCommentReply.rejected]: (state) => {
      state.isListCommentLoading = false;
    },

    // delete comment
    [deleteComment.fulfilled]: (state, action) => {
      state.isListCommentLoading = false;
      state.listComment = state.listComment.filter(
        (cmt) => cmt.id !== action.payload
      );
    },
    [deleteComment.rejected]: (state) => {
      state.isListCommentLoading = false;
    },

    // delete comment reply
    [deleteCommentReply.fulfilled]: (state, action) => {
      state.isListCommentLoading = false;
      state.listComment = state.listComment.map((cmt) => {
        return {
          ...cmt,
          get_reply: cmt?.get_reply?.filter(
            (item) => item.id !== action.payload
          ),
        };
      });
    },
    [deleteCommentReply.rejected]: (state) => {
      state.isListCommentLoading = false;
    },

    // edit comment
    [putComment.fulfilled]: (state, action) => {
      state.isListCommentLoading = false;
      state.listComment = state.listComment.map((cmt) =>
        cmt.id === action.payload.data[0]?.id ? action.payload.data[0] : cmt
      );
    },
    [putComment.rejected]: (state) => {
      state.isListCommentLoading = false;
    },

    // edit comment reply
    [putCommentReply.fulfilled]: (state, action) => {
      state.isListCommentLoading = false;
      state.listComment = state.listComment.map((cmt) => {
        return {
          ...cmt,
          get_reply: cmt?.get_reply?.map((cmtSub) =>
            cmtSub.id === action.payload?.reply?.parent_id
              ? action.payload.reply
              : cmtSub
          ),
        };
      });
    },
    [putCommentReply.rejected]: (state) => {
      state.isListCommentLoading = false;
    },

    // count star
    [getCountStar.fulfilled]: (state, action) => {
      state.isCountStarLoading = false;
      state.countStar = action.payload.data;
    },
    [getCountStar.rejected]: (state) => {
      state.isCountStarLoading = false;
    },

    // avg star
    [getAvgStar.fulfilled]: (state, action) => {
      state.isLoadingDetailProduct = false;
      state.avgStar = action.payload?.avgStar;
    },
    [getAvgStar.rejected]: (state) => {
      state.isLoadingDetailProduct = false;
    },
  },
});

const { reducer: detailProductReducer } = detailProductSlice;
export default detailProductReducer;
