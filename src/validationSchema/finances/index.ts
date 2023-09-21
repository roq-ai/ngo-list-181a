import * as yup from 'yup';

export const financeValidationSchema = yup.object().shape({
  budget: yup.number().integer().required(),
  expenses: yup.number().integer().required(),
  income: yup.number().integer().required(),
  balance: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
