import api from 'api/api';

import { CATEGORY_ENDPOINTS ,FILTER_PRODUCT} from './../constants/category.endpoints';


const getMajors = () => {
  return api.get(CATEGORY_ENDPOINTS.GET_MAJORS);
};
const getSubject = (id)=>{
  return api.get(CATEGORY_ENDPOINTS.GET_SUBJECT.replace(":id",id.toString()))
}
const productMajor = (id)=>{
  if(Number(id)){
    return api.get(CATEGORY_ENDPOINTS.PRODUCT_MAJOR.replace(':id',id.toString()))
  }else{
    return api.get(CATEGORY_ENDPOINTS.ALL_PRODUCT)
  }

}
const teacherApi = (data)=>{
  return  api.post(FILTER_PRODUCT.FILTER_PATH ,data)
}
const filterProduct = (data)=>{
  return api.post(FILTER_PRODUCT.FILTER_CATEGORY,data)
}
const seachCategory = (data)=>{
  return api.post(FILTER_PRODUCT.SEACH_CATEGORY,data)
}
const sortCategory = (data)=>{
  return api.get(`/client/sort?majorId=${data.major_id}&sortBy=${data.value}`)
}
const allSubject = ()=>{
  return api.get("/subjects")
}
export const categoryApi = {
  getMajors,
  getSubject,
  productMajor,
  filterProduct,
  teacherApi,
  seachCategory,
  sortCategory,
  allSubject
};
