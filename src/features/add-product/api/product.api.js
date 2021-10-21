import api from './../../../api/api';
export const addPro = (data) => {
  let url = '/products';
  return api.post(url, data);
};
export const getSubject = () => {
  let url = '/subjects';
  return api.get(url);
};
// http://api.duanpoly.ml/api/products
