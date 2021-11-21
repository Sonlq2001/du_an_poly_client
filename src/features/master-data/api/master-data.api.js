import api from 'api/api';

import { MASTER_DATA_ENDPOINTS } from './../constants/master-data.endpoints';

const getCampuses = () => {
  return api.get(MASTER_DATA_ENDPOINTS.CAMPUSES);
};

export const masterDataApi = {
  getCampuses,
};
