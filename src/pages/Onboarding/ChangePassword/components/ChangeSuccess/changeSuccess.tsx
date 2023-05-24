import { Button } from '@/components/Button/button'

import { ContainerRecover, ContextTitle } from './styled'

import { useNavigate } from 'react-router-dom'

import { ThemeColor } from '@/config/color'
import { ButtonText, SuccessChange } from '@/config/text'
import { handleLogin } from '@/utils/handleNavigate'
import { ContainerSubmit } from '@/styles/default'

export function ChangeSuccess() {
  const navigate = useNavigate()

  return (
    <ContainerRecover>
      <ContextTitle colorTitle={ThemeColor.secundaria}>
        <h2>{SuccessChange.success}</h2>
        <p>{SuccessChange.successText}</p>
      </ContextTitle>

      <ContainerSubmit   className='containerSubmit'>
      <Button
        type="button"
        onClick={() => handleLogin(navigate)}
        colorBackground={ThemeColor.secundaria}
        success={true}
        title={ButtonText.irLogin}
      />
      </ContainerSubmit>
    </ContainerRecover>
  )
}
