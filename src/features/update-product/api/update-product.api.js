import api from 'api/api';

import {
  ADD_PRODUCT_ENDPOINTS,
  REMOVE_IMG,
} from './../constants/update-product.endpoints';

const getProductTypes = () => {
  return api.get(ADD_PRODUCT_ENDPOINTS.GET_PRODUCT_TYPES);
};
const getDetail = (id) => {
  return api.get(ADD_PRODUCT_ENDPOINTS.GET_PRODUCT_UPDATE.replace(':id', id));
};
const removeImage = (data) => {
  return api.post(REMOVE_IMG.REMOVE, data);
};
const updateProduct = (data)=>{
  return api.put(ADD_PRODUCT_ENDPOINTS.GET_PRODUCT_UPDATE.replace(':id', data.id), data.newObjProduct);
}
export const UpdateProductApi = {
  getProductTypes,
  getDetail,
  removeImage,
  updateProduct
};
