import api from 'api/api';

import { CATEGORY_ENDPOINTS } from './../constants/category.endpoints';

const getProducts = () => {
  return api.get(CATEGORY_ENDPOINTS.GET_PRODUCTS);
};

const getMajors = () => {
  return api.get(CATEGORY_ENDPOINTS.GET_MAJORS);
};

export const categoryApi = {
  getProducts,
  getMajors,
};
