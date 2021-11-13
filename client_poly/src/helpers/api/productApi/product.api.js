import api from 'api/api';

const getProducts = () => {
  return api.get('/products');
};

export const productApi = {
  getProducts,
};
