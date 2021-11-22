import api from './../../../api/api';
import { PROFILE_PATH } from './../constants/profile.constants';
const getProducts = (id) => {
  return api.get(PROFILE_PATH.LIST_PRODUCTS.replace('id',id.toString()));
};
const getDetails = (id) => {
  return api.get(PROFILE_PATH.GET_DETAIL.replace(':id', id.toString()));
};
export const ProfileApi = {
  getProducts,
  getDetails,
};
