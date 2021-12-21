import api from 'api/api';

import { PROFILE_ENDPOINTS } from '../constants/profile.endpoints';

const getProfileUser = (id) => {
  return api.get(PROFILE_ENDPOINTS.GET_LIST_PRODUCT_USER.replace(':id', id));
};
export const profileApi = {
  getProfileUser,
};
