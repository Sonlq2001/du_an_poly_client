export const initForm = {
  name: '',
  video_url: '',
  product_type_id: '',
  class: 'pt12365',
  image_url: '',
  resource_url: '',
  students: null,
  galleries: [],
  description: '',
  status: 1,
  token: '',
};
export const DataConvert =  (productDetail)=>{  
    if(productDetail){
      const data = {
        campus_id : productDetail.campus_id,
        class : productDetail.class,
        description : productDetail.description,
        image:  productDetail.image,
        name : productDetail.name,
        product_galleries :  productDetail.product_galleries,
        resource_url: productDetail.resource_url,
        semester :productDetail.semester,
        students :productDetail.students,
        subject : productDetail.subject,
        teacher : productDetail.teacher,
        user_id : productDetail.user_id,
        video_url : productDetail.video_url, 
        product_type_id :productDetail.product_type_id
      }
      return data
    }
    return null
}
export const DataConvertStudent = (data)=>{
  if(data){
     let grupStudent = data.students.map((item)=>{
       return item.email.substring(0,item.email.search('@'))
     })
     return grupStudent
  }
  return []
}