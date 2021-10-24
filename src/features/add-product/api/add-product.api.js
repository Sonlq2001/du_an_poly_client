import api from 'api/api';

const addProduct = (data) => {
  let url = '/products';
  return api.post(url, data);
};

export const getProductType = () => {
  let url = '/product_types';
  return api.get(url);
};

export const addProductApi = {
  addProduct,
};
