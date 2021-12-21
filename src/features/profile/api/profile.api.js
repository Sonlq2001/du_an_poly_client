import api from 'api/api';

import { PROFILE_ENDPOINTS } from '../constants/profile.endpoints';

const getProductsUser = (id) => {
  return api.get(PROFILE_ENDPOINTS.GET_LIST_PRODUCT_USER.replace(':id', id));
};

const getDetails = (id) => {
  return api.get(PROFILE_ENDPOINTS.GET_PROFILE_USER.replace(':id', id));
};
export const profileApi = {
  getProductsUser,
  getDetails,
};
