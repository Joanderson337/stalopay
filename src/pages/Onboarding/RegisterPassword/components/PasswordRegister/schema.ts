import { Error } from '@/config/text'
import * as Yup from 'yup'

export const schema = Yup.object().shape({
  password: Yup.string()
    .required(Error.campoRequired)
    .min(6, Error.senhaMin)
    .matches(/(?=.*[0-9])/, '')
    .matches(/(?=.*[a-z])/, '')
    .matches(/(?=.*[A-Z])/, '')
    .matches(/[^a-zA-Z0-9]/, ''),
  passwordConfirm: Yup.string()
    .required(Error.campoRequired)
    .test('password-match', Error.notMatch, function (value) {
      return this.parent.password === value
    })
})
