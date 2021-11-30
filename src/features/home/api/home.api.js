import api from 'api/api';
import { HOME_ENDPOINTS } from './../constants/home.endpoints';

const getData = async () => {
  return api.get(HOME_ENDPOINTS.GET_DATA);
};

const searchData = (data) => {
  return api.post(HOME_ENDPOINTS.POST_FILTER_DATA, data);
};

export const homeApi = {
  getData,
  searchData,
};
