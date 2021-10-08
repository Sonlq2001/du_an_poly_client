import api from './../../../api/api';
let url = '/product';
export const addPro = (newproduct) => {
  console.log('product  ở đây ', newproduct);
  return api.post(url, newproduct);
};
