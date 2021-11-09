import api from './../../../api/api';
import { PROFILE_PATH } from './../constants/profile.constants';
const getProducts = () => {
  return api.get(PROFILE_PATH.LIST_PRODUCTS);
};
const getDetails = (id) => {
  return api.get(PROFILE_PATH.GET_DETAIL.replace(':id', id.toString()));
};
export const ProfileApi = {
  getProducts,
  getDetails,
};
