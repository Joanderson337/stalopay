  import { useForm } from 'react-hook-form'
  import { yupResolver } from '@hookform/resolvers/yup'
  import { useNavigate } from 'react-router-dom'
  import * as Yup from 'yup'

  import {
    ConatainerButton,
    ConatainerInput,
    ContainerLogin,
    ContextInput,
    Form,
    TitleLogin
  } from './styled'

  import { Button } from '@/components/Button/button'

  import { schema } from './schema'

  import { ThemeColor } from '@/config/color'
  import { ButtonText, Placeholder, Text } from '@/config/text'
  import { useContext, useEffect } from 'react'
  import { AuthContext } from '@/context/user.login'
import { handleRecover } from '@/utils/handleNavigate'
import { CustomInput } from '@/components/Input/input'
import { InputMask } from '@/components/InputMask/inputMask'
import { ContainerSubmit } from '@/styles/default'
import { MessageError } from '@/components/MessageError/messageError'

  type FormData = {
    email: string
    password: string
  }

  export function Login() {
    const navigate = useNavigate()
    const { login, isLoggedIn } = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isValid },
      watch
    } = useForm<FormData>({
      resolver: yupResolver(schema)
    })

    const email = watch('email')
    const password = watch('password')

    const onSubmit = async (data: FormData) => {
      try {
        await login(data.email, data.password);
      }
      catch (error) {
        setError('email', {
          type: 'manual',
          message: 'Usuário ou senha inválidas',
        });
        setError('password', {
          type: 'manual',
        });
      }
    };

  useEffect(() => {
    if(isLoggedIn){
      navigate('/home')
    }
  })

    return (
      <ContainerLogin>

        <TitleLogin colorTitle={ThemeColor.primaria}>{Text.title}</TitleLogin>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <ConatainerInput>

            <ContextInput>
              <CustomInput
                label='Login'
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
              />
              {errors.email && <MessageError>{errors.email.message}</MessageError>}
            </ContextInput>
          </ConatainerInput>

          <ConatainerInput>
            <ContextInput>
              <InputMask
                label='Senha'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                placeholder={Placeholder.placeholderSenha}
                {...register('password')}
                hasError={!!errors.password || (password ? password.length < 6 : undefined)}
                hasSuccess={
                  !errors.password &&
                  password?.length >= 6 &&
                  Yup.string().trim().min(6).max(20).isValidSync(password)
                }
              />
              {errors.password && <MessageError>{errors.password.message}</MessageError>}
            </ContextInput>
            <ConatainerButton>
            Esqueceu a senha?
              <button onClick={() => handleRecover(navigate)} type="button">
            Clique aqui
              </button>
            </ConatainerButton>
          </ConatainerInput>

          <ContainerSubmit className='containerSubmit'>
            <Button
            type="submit"
            colorBackground={ThemeColor.secundaria}
            success={isValid}
            title={ButtonText.login}
          />
          </ContainerSubmit>
        </Form>
      </ContainerLogin>
    )
  }
