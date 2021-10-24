import api from './../../../api/api';
export const addPro = (data) => {
  let url = '/products';
  return api.post(url, data);
};
export const getProductType = () => {
  let url = '/product_types';
  return api.get(url);
};
