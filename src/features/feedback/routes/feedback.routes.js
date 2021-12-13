import React from 'react';

import { FEEDBACK_PATHS } from './../constants/feedback.paths';

const FEEDBACK_SCREEN = {
  id: 'id_feedback',
  path: FEEDBACK_PATHS.FEEDBACK,
  component: React.lazy(() =>
    import('./../screens/FeedbackScreen/FeedbackScreen')
  ),
  titlePage: 'Phản hồi',
};

export const FEEDBACK_ROUTES = [FEEDBACK_SCREEN];
