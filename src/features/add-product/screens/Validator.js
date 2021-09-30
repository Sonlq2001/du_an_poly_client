import * as yup from 'yup';
export const ValidatorProduct = yup.object().shape({
  name: yup.string().max(200).required(),
});
