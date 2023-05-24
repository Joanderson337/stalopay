import { Error } from '@/config/text';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().trim().email(Error.emailInvalid).required(Error.emailRequired),
});
