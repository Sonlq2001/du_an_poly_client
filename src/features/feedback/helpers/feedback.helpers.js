import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Vui lòng nhập họ tên !'),
  email: Yup.string()
    .required('Vui lòng nhập địa chỉ email !')
    .email('Email không hợp lệ !'),
  content: Yup.string().required('Vui lòng nhập nội dung phản hồi !'),
});

export const initForm = {
  name: '',
  email: '',
  content: '',
};
