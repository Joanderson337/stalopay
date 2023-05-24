import {
  Back,
  CotainerNotFound,
  CotainerText,
  IconWrapper,
  Img404
} from './styled'

import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import { TextNotFound } from '@/config/text'
import { ThemeImg } from '@/config/img'
import { ThemeColor } from '@/config/color'
import { handleLogin } from '@/utils/handleNavigate'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <CotainerNotFound>
      <Img404 src={ThemeImg.img404} alt={TextNotFound.paginaNaoEncontrada} />
      <CotainerText>
        <p>{TextNotFound.paginaNaoEncontrada}</p>
        <span>{TextNotFound.naoExiste}</span>
      </CotainerText>
      <Back color={ThemeColor.secundaria} onClick={() => handleLogin(navigate)}>
        <IconWrapper color={ThemeColor.secundaria}>
          <IoIosArrowBack />
        </IconWrapper>
        {TextNotFound.voltar}
      </Back>
    </CotainerNotFound>
  )
}
