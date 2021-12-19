import api from 'api/api';

import { MASTER_DATA_ENDPOINTS } from './../constants/master-data.endpoints';

const getCampuses = () => {
  return api.get(MASTER_DATA_ENDPOINTS.CAMPUSES);
};

const getSubjects = () => {
  return api.get(MASTER_DATA_ENDPOINTS.SUBJECTS);
};

const getProductType = () => {
  return api.get(MASTER_DATA_ENDPOINTS.PRODUCT_TYPES);
};

export const masterDataApi = {
  getCampuses,
  getSubjects,
  getProductType,
};
