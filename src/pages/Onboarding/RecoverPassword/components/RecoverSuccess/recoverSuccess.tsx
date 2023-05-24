import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/Button/button'

import { ContainerRecover, ContextTitle } from './styled'

import { ThemeColor } from '@/config/color'
import { ButtonText, RecoverPasswordSuccess } from '@/config/text'
import { ContainerSubmit } from '@/styles/default'

interface Props {
  email: string
}

export function RecoverSuccess({ email }: Props) {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <ContainerRecover>
      <ContextTitle colorTitle={ThemeColor.secundaria}>
        <h2>{RecoverPasswordSuccess.enviado}</h2>
        <p>
          {RecoverPasswordSuccess.text} {email}.{' '}
          {RecoverPasswordSuccess.completeText}
        </p>
      </ContextTitle>
      <ContainerSubmit>
      <Button
        type="button"
        onClick={handleLogin}
        colorBackground={ThemeColor.secundaria}
        success={true}
        title={ButtonText.irLogin}
      />
      </ContainerSubmit>
    </ContainerRecover>
  )
}
