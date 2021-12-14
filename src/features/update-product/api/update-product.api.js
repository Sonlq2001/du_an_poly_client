import api from 'api/api';
import {ADD_PRODUCT_ENDPOINTS,REMOVE_IMG}  from "./../constants/update-product.endpoints"
const getProductTypes = () => {
     return api.get(ADD_PRODUCT_ENDPOINTS.GET_PRODUCT_TYPES);
   };
   const getDetail = (id)=>{
        return api.get(`/products/${id}`)
   }
   const removeImage = (data) => {
     return api.post(REMOVE_IMG.REMOVE, data);
   };
export const UpdateProductApi = {
     getProductTypes ,
     getDetail,
     removeImage
}