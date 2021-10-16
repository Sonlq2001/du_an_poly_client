import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  // name: yup.string().max(200).required(' * Tên không được để trống ! '),
  // video_url: yup.string().max(200).required('* Video không được để trống !'),
  // product_type_id: yup.string().max(200).required('* Không được để trống !'),
  // resource_url: yup.mixed().required('* Tài liệu không để trống !'),
  // // // .test(
  // // //   'file',
  // // //   'Kích thước file quá lớn !',
  // // //   (value) => value === null || (value && value?.size <= 100000)
  // // // ),
  // students: yup.mixed().required(' * Không để trống !'),
  // galleries: yup.mixed().required('* Không được để trống !'),
  // image: yup.mixed().required('* Không được để trống !'),
});
