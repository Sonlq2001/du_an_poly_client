import api from 'api/api';

import { DETAIL_ENDPOINTS } from '../constants/detail.endpoints';

const getProductDetail = (id) => {
  return api.get(DETAIL_ENDPOINTS.GET_PRODUCT_DETAIL.replace(':id', id));
};

const postProductRating = (countRating) => {
  return api.post(
    DETAIL_ENDPOINTS.POST_PRODUCT_RATING.replace(':id', countRating.id),
    countRating
  );
};

export const detailProductApi = {
  getProductDetail,
  postProductRating,
};
