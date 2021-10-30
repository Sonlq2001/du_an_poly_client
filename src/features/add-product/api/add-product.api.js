import api from 'api/api';

import { ADD_PRODUCT_ENDPOINTS } from './../constants/add-product.endpoints';

const addProduct = (data) => {
  return api.post(ADD_PRODUCT_ENDPOINTS.POST_ADD_PRODUCT, data);
};

const getProductTypes = () => {
  return api.get(ADD_PRODUCT_ENDPOINTS.GET_PRODUCT_TYPES);
};

const getInfo = (email) => {
  return api.post('/products/getinfo', email);
};

export const addProductApi = {
  addProduct,
  getInfo,
  getProductTypes,
};
