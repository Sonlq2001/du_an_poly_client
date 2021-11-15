import api from './../../../api/api';

import { AUTH_ENDPOINTS } from './../constants/auth.endpoints';

const getAccessToken = (accessToken) => {
  return api.post(AUTH_ENDPOINTS.POST_ACCESS_TOKEN, accessToken);
};

const postLogout = () => {
  return api.get(AUTH_ENDPOINTS.POST_LOGOUT);
};
const fetChCampuses = () => {
  return api.get(AUTH_ENDPOINTS.GET_CAMPUSES);
};
export const authApi = {
  getAccessToken,
  postLogout,
  fetChCampuses,
};
