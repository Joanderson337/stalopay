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
import { ButtonText, Placeholder, RegisterPassword } from '@/config/text'

import { RegisterSuccess } from '../RegisterSuccess/registerSuccess'
import { handleLogin } from '@/utils/handleNavigate'
import { InputMask } from '@/components/InputMask/inputMask'
import { ContainerSubmit, ContextTitle } from '@/styles/default'
import { MessageError } from '@/components/MessageError/messageError'

type FormData = {
  password: string
  passwordConfirm: string
}

export function PasswordRegister() {
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
  const hasLowercase = /[a-z]/.test(password || '')
  const hasUppercase = /[A-Z]/.test(password || '')
  const hasNumber = /[0-9]/.test(password || '')
  const hasSpecialChar = /\W/.test(password || '')
  const hasSixCharacters = (password || '').length >= 6

  const onSubmit = (data: FormData) => {
    console.log(data)

    setSucess(true)
  }

  return (
    <>
      {success ? (
        <RegisterSuccess />
      ) : (
        <ContainerRecover>
          <ContextContainer>
            <button type="button" onClick={() => handleLogin(navigate)}>
              <IconWrapper>
                <IoIosArrowBack />
              </IconWrapper>
              {RegisterPassword.voltar}
            </button>
            <ContextTitle>
              <h2>{RegisterPassword.cadastrar}</h2>
              <p>{RegisterPassword.text}</p>
            </ContextTitle>
          </ContextContainer>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <ConatainerInput>
              <ContextInput>
                <InputMask
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  placeholder={Placeholder.placeholderNova}
                  {...register('password')}
                  hasError={
                    !!errors.password ||
                    (password &&
                      (!hasLowercase ||
                        !hasUppercase ||
                        !hasNumber ||
                        !hasSpecialChar ||
                        !hasSixCharacters)) ||
                    false
                  }
                  hasSuccess={
                    !errors.password &&
                    hasLowercase &&
                    hasUppercase &&
                    hasNumber &&
                    hasSpecialChar &&
                    hasSixCharacters
                  }
                />
                {errors.password && <MessageError>{errors.password.message}</MessageError>}
                {password && !hasLowercase && (
                  <MessageError>
                    A senha deve conter pelo menos uma letra minúscula
                  </MessageError>
                )}
                {password && hasLowercase && !hasUppercase && (
                  <MessageError>
                    A senha deve conter pelo menos uma letra maiúscula
                  </MessageError>
                )}
                {password && hasLowercase && hasUppercase && !hasNumber && (
                  <MessageError>A senha deve conter pelo menos um número</MessageError>
                )}
                {password &&
                  hasLowercase &&
                  hasUppercase &&
                  hasNumber &&
                  !hasSpecialChar && (
                    <MessageError>
                      A senha deve conter pelo menos um caractere especial
                    </MessageError>
                  )}
                {password &&
                  hasLowercase &&
                  hasUppercase &&
                  hasNumber &&
                  hasSpecialChar &&
                  !hasSixCharacters && (
                    <MessageError>A senha deve ter pelo menos 6 caracteres</MessageError>
                  )}
              </ContextInput>
            </ConatainerInput>

            <ConatainerInput>
              <ContextInput>
                <InputMask
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
            <ContainerSubmit>
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
