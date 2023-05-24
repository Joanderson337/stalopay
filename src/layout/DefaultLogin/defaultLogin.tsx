import {
  BackgroundLogin,
  DefaultContainerLogin,
  DefaultContext
} from './styled'

import { Outlet } from 'react-router-dom'

import { Text } from '@/config/text'
import { ThemeImg } from '@/config/img'
import { ThemeColor } from '@/config/color'

export function DefaultLogin() {

  return (
    <>
      <DefaultContainerLogin>
        <BackgroundLogin colorOverlay={ThemeColor.primaria} background={ThemeImg.backgroundLogin}>
          <img style={{zIndex: 100}} src={ThemeImg.backgroundLogo}  />
        </BackgroundLogin>
        <DefaultContext>
          <Outlet />
          <span>{Text.direitosReservados}</span>
        </DefaultContext>
      </DefaultContainerLogin>
    </>
  )
}
