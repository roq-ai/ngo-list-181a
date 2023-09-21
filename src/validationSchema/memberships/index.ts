import * as yup from 'yup';

export const membershipValidationSchema = yup.object().shape({
  membership_type: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
