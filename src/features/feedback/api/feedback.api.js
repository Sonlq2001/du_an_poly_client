import api from 'api/api';

import { FEEDBACK_ENDPOINTS } from './../constants/feedback.endpoints';

const postFeedback = (data) => {
  return api.post(FEEDBACK_ENDPOINTS.POST_FEEDBACK, data);
};

export const feedbackApi = {
  postFeedback,
};
