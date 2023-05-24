import { Button } from '@/components/Button/button'

import { useNavigate } from 'react-router-dom'

import { ContainerRecover, ContextTitle } from './styled'

import { ThemeColor } from '@/config/color'
import { ButtonText, RegisterPasswordSuccess } from '@/config/text'
import { ContainerSubmit } from '@/styles/default'

export function RegisterSuccess() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <ContainerRecover>
      <ContextTitle colorTitle={ThemeColor.secundaria}>
        <h2>{RegisterPasswordSuccess.senha}</h2>
        <p>{RegisterPasswordSuccess.text}</p>
      </ContextTitle>
      <ContainerSubmit className='containerSubmit'>
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
