import * as yup from 'yup';

export const ngoValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  address: yup.string().required(),
  phone_number: yup.string().required(),
  email: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
