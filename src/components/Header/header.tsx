import { AuthContext } from '@/context/user.login'
import { useContext, useState } from 'react'
import {
  ButtonHeader,
  ContainerHeader,
  ContainerModal,
  ContainerPerfil,
  ImagPerfil,
  NomePerfil
} from './styled'
import { Modal } from './components/Modal/modal'
import { RxTriangleDown, RxTriangleUp } from 'react-icons/Rx'
import { ThemeColor } from '@/config/color'

export function Header() {
  const { user } = useContext(AuthContext)
  const [openModal, setOpenModal] = useState(false)

  return (
    <ContainerHeader>
      <p>Home</p>
      <ContainerPerfil>
        <NomePerfil>{user?.name}</NomePerfil>
        {openModal ? (
          <ButtonHeader color={ThemeColor.secundaria} onClick={() => setOpenModal(false)}>
            <ImagPerfil color={ThemeColor.secundaria} src={user?.photoUrl} />
            <RxTriangleUp />
          </ButtonHeader>
        ) : (
          <ButtonHeader color={ThemeColor.secundaria} onClick={() => setOpenModal(true)}>
            <ImagPerfil color={ThemeColor.secundaria} src={user?.photoUrl} />
            <RxTriangleDown />
          </ButtonHeader>
        )}
        <ContainerModal>{openModal && <Modal />}</ContainerModal>
      </ContainerPerfil>
    </ContainerHeader>
  )
}
