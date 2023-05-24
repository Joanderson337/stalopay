import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'

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
import { ButtonText, Placeholder, RecoverPassword } from '@/config/text'

import { Button } from '@/components/Button/button'
import { RecoverSuccess } from '../RecoverSuccess/recoverSuccess'
import { handleLogin } from '@/utils/handleNavigate'
import { CustomInput } from '@/components/Input/input'
import { ContainerSubmit, ContextTitle } from '@/styles/default'
import { MessageError } from '@/components/MessageError/messageError'

type FormData = {
  email: string
}

export function PasswordRecover() {
  const navigate = useNavigate()
  const [emailR, setEmailR] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const email = watch('email')

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSuccess(true)
  }

  return (
    <>
      {success ? (
        <RecoverSuccess email={emailR} />
      ) : (
        <>

          <ContainerRecover>

          <button type="button" onClick={() => handleLogin(navigate)}>
              <IconWrapper>
                <IoIosArrowBack />
              </IconWrapper>
              {RecoverPassword.voltar}
            </button>

          <ContextContainer>
            <ContextTitle>
              <h2>{RecoverPassword.recuperar}</h2>
              <p>{RecoverPassword.text}</p>
            </ContextTitle>
          </ContextContainer>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <ConatainerInput>
              <ContextInput>
                <CustomInput
                  label='E-mail'
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  placeholder={Placeholder.placeholderEmail}
                  {...register('email')}
                  hasError={!!errors.email}
                  hasSuccess={
                    !!email &&
                    !errors.email &&
                    Yup.string().trim().email().isValidSync(email)
                  }
                  value={emailR}
                  onChange={event => setEmailR(event.target.value)}
                />
                {errors.email && <MessageError>{errors.email.message}</MessageError>}
              </ContextInput>
            </ConatainerInput>

              <ContainerSubmit className='containerSubmit'>
            <Button
              type="submit"
              colorBackground={ThemeColor.secundaria}
              success={isValid}
              title={ButtonText.enviar}
            />
            </ContainerSubmit>
          </Form>
        </ContainerRecover>
        </>
      )}
    </>
  )
}
