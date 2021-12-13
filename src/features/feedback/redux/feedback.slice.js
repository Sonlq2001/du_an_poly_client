import { createAsyncThunk } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { feedbackApi } from './../api/feedback.api';

export const postFeedback = createAsyncThunk(
  'feedback/postFeedback',
  async (data, { rejectWithValue }) => {
    try {
      await feedbackApi.postFeedback(data);
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'error', ''));
    }
  }
);
