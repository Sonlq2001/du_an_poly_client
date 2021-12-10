import api from 'api/api';
import { HOME_ENDPOINTS } from './../constants/home.endpoints';

const getProducts = async (params) => {
  return api.get(HOME_ENDPOINTS.GET_PRODUCT, { params });
};

const searchData = (data) => {
  return api.post(HOME_ENDPOINTS.POST_FILTER_DATA, data);
};
const productMajor = (id)=>{
  return api.get(HOME_ENDPOINTS.PRODUCT_MAJOR.replace(':id',id.toString()))
}
export const homeApi = {
  getProducts,
  searchData,
  productMajor
};
