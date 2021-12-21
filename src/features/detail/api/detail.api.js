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

const getCommentsOfProduct = (id) => {
  return api.get(DETAIL_ENDPOINTS.GET_COMMENTS_OF_PRODUCT.replace(/:id/, id));
};

const postComment = (comment) => {
  return api.post(DETAIL_ENDPOINTS.POST_COMMENT, comment);
};

const postCommentReply = (comment) => {
  return api.post(
    DETAIL_ENDPOINTS.POST_COMMENT_REPLY.replace(/:id/, comment.id),
    comment
  );
};

const deleteCommentReply = (id) => {
  return api.delete(DETAIL_ENDPOINTS.DELETE_COMMENT_REPLY.replace(/:id/, id));
};

const deleteComment = (id) => {
  return api.delete(DETAIL_ENDPOINTS.DELETE_COMMENT.replace(/:id/, id));
};

const putComment = (comment) => {
  return api.put(
    DETAIL_ENDPOINTS.PUT_COMMENT.replace(/:id/, comment.id),
    comment
  );
};

const putCommentReply = (comment) => {
  return api.put(
    DETAIL_ENDPOINTS.PUT_COMMENT_REPLY.replace(/:id/, comment.id),
    comment
  );
};

const getCountStar = (id) => {
  return api.get(DETAIL_ENDPOINTS.GET_COUNT_STAR.replace(/:id/, id));
};

const getAvgStar = (id) => {
  return api.get(DETAIL_ENDPOINTS.GET_AVG_STAR.replace(/:id/, id));
};

const getDownloadDocs = (params) => {
  return api.get(DETAIL_ENDPOINTS.POST_DOWNLOAD_DOCS, { params });
};

export const detailProductApi = {
  getProductDetail,
  getCommentsOfProduct,
  postComment,
  postCommentReply,
  deleteCommentReply,
  deleteComment,
  putComment,
  putCommentReply,
  postProductRating,
  getCountStar,
  getAvgStar,
  getDownloadDocs,
};
