import api from './../../../api/api';
export const addPro = (data) => {
  console.log('dự liệu ', data);
  let url = '/products';
  return api.post(url, data);
};
// http://api.duanpoly.ml/api/products
