import api from './../../../api/api';
import { HOME_PATH } from './../constants/home.endpoints';

const getData = async () => {
  return api.get(HOME_PATH.GET_DATA);
};

export const homeApi = {
  getData,
};
