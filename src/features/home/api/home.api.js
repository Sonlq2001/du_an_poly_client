import api from 'api/api';
import { HOME_ENDPOINTS } from './../constants/home.endpoints';

const getProducts = async (params) => {
  return api.get(HOME_ENDPOINTS.GET_PRODUCT, { params });
};

const searchData = (data) => {
  return api.post(HOME_ENDPOINTS.POST_FILTER_DATA, data);
};

export const homeApi = {
  getProducts,
  searchData,
};
