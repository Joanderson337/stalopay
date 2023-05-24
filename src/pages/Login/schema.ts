import { Error } from '@/config/text';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().trim().email(Error.emailInvalid).required(Error.emailRequired),
  password: Yup.string().trim()
    .required(Error.senhaRequired)
    .min(6, Error.senhaMin)
    // .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, Error.notMatchValue),
});
