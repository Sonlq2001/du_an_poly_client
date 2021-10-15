import api from './../../../api/api';

import { AUTH_ENDPOINTS } from './../constants/auth.endpoints';

const loginSocial = () => {
  return api.get(AUTH_ENDPOINTS.GET_PATH_LOGIN);
};

export const authApi = {
  loginSocial,
};
