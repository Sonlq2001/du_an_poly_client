import api from 'api/api';

import { CATEGORY_ENDPOINTS ,FILTER_PRODUCT} from './../constants/category.endpoints';


const getMajors = () => {
  return api.get(CATEGORY_ENDPOINTS.GET_MAJORS);
};
const getSubject = (id)=>{
  return api.get(CATEGORY_ENDPOINTS.GET_SUBJECT.replace(":id",id.toString()))
}
const productMajor = (id)=>{
  return api.get(CATEGORY_ENDPOINTS.PRODUCT_MAJOR.replace(':id',id.toString()))
}
const filterProduct = (data)=>{
  return api.post(FILTER_PRODUCT.FILTER_PATH,data)
}
export const categoryApi = {
  getMajors,
  getSubject,
  productMajor,
  filterProduct
};
