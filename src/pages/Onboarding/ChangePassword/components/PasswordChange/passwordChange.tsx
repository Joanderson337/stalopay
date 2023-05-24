import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'

import { Button } from '@/components/Button/button'
import {
  ConatainerInput,
  ContainerRecover,
  ContextContainer,
  ContextInput,
  Form,
  IconWrapper
} from './styled'

import { schema } from './schema'

import { ThemeColor } from '@/config/color'
import { ButtonText, ChangePassword, Placeholder } from '@/config/text'

import { ChangeSuccess } from '../ChangeSuccess/changeSuccess'
import { handleLogin } from '@/utils/handleNavigate'
import { InputMask } from '@/components/InputMask/inputMask'
import { ContainerSubmit, ContextTitle } from '@/styles/default'
import { MessageError } from '@/components/MessageError/messageError'

type FormData = {
  password: string
  passwordConfirm: string
}

interface Props {
  email: string
}

export function PasswordChange({ email }: Props) {
  const [success, setSucess] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const password = watch('password')
  const passwordConfirm = watch('passwordConfirm')

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSucess(true)
  }

  return (
    <>
      {success ? (
        <ChangeSuccess />
      ) : (
        <ContainerRecover>
             <button type="button" onClick={() => handleLogin(navigate)}>
            <IconWrapper>
          <IoIosArrowBack />
        </IconWrapper>
              {ChangePassword.voltar}
            </button>
          <ContextContainer>

            <ContextTitle>
              <h2>{ChangePassword.alterar}</h2>
              <p>{ChangePassword.desejada}{email}</p>
            </ContextTitle>
          </ContextContainer>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <ConatainerInput>
              <ContextInput>
                <InputMask
                  label='Nova Senha'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  placeholder={Placeholder.placeholderNova}
                  {...register('password')}
                  hasError={
                    !!errors.passwordConfirm ||
                    (passwordConfirm && password !== passwordConfirm) ||
                    (!!errors.password &&
                      errors.password.type === 'required') ||
                    (password && password.length < 6) ||
                    undefined
                  }
                  hasSuccess={!errors.passwordConfirm && password?.length >= 6}
                />

                {errors.password && <MessageError>{errors.password.message}</MessageError>}
              </ContextInput>
            </ConatainerInput>

            <ConatainerInput>
              <ContextInput>
                <InputMask
                  label='Repetir Nova Senha'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  placeholder={Placeholder.placeholderRepita}
                  {...register('passwordConfirm')}
                  hasError={
                    (!!errors.passwordConfirm &&
                      errors.passwordConfirm.type === 'required') ||
                    (passwordConfirm && password !== passwordConfirm) ||
                    (passwordConfirm && passwordConfirm.length < 6) ||
                    undefined
                  }
                  hasSuccess={
                    !errors.passwordConfirm &&
                    password === passwordConfirm &&
                    passwordConfirm?.length >= 6
                  }
                />

                {errors.passwordConfirm && (
                  <MessageError>{errors.passwordConfirm.message}</MessageError>
                )}
              </ContextInput>
            </ConatainerInput>
            <ContainerSubmit className='containerSubmit'>
            <Button
              type="submit"
              colorBackground={ThemeColor.secundaria}
              success={isValid}
              title={ButtonText.salvar}
            />
            </ContainerSubmit>
          </Form>
        </ContainerRecover>
      )}
    </>
  )
}
