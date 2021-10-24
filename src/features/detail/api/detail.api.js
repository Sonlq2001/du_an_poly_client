import api from 'api/api';

import { DETAIL_ENDPOINTS } from '../constants/detail.endpoints';

const getProductDetail = (id) => {
  return api.get(DETAIL_ENDPOINTS.GET_PRODUCT_DETAIL.replace(':id', id));
};

export const detailProductApi = {
  getProductDetail,
};
