import * as yup from 'yup';
export const shape = yup.object().shape({
  name: yup.string().max(200).required('Tên không được để trống'),
  class: yup.string().max(200).required('Lớp học không được để trống'),
  video: yup.string().max(200).required('video không được để trống'),
  teacher: yup.string(),
  subject_id: yup.string(),
  document: yup.string().required('tài liệu không để trống'),
});
