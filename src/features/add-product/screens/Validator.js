import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  name: yup.string().max(200).required(' * Tên không được để trống ! '),
  video: yup.string().max(200).required('* Video không được để trống !'),
  product_id: yup.string().max(200).required('* không được để trống !'),
  document: yup
    .mixed()
    .required('* Tài liệu không để trống !')
    .test(
      'file',
      'Kích thước file quá lớn !',
      (value) => value === null || (value && value?.size <= 100000)
    ),
  group: yup.mixed().required('không để trống !'),
  images: yup.mixed().required('không được để trống !')
});
