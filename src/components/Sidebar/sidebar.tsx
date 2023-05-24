import { ButtonSider, ContainerSidebar, Line, Logo, Menu } from './styled'

import { BiHomeAlt } from 'react-icons/bi'
import { Medal, Storefront, Book, Clipboard, Tag } from '@phosphor-icons/react'
// import { AiOutlinePercentage, AiOutlineFileText } from 'react-icons/Ai'
import { SetStateAction, useState } from 'react'

import { ThemeImg } from '@/config/img'
import { ThemeColor } from '@/config/color'
import { SidebarText } from '@/config/sidebar'

export function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(0)

  const handleButtonClick = (index: SetStateAction<number>) => {
    setSelectedItem(index)
  }

  console.log(selectedItem)

  return (
    <ContainerSidebar color={ThemeColor.primaria}>
      <Logo src={ThemeImg.backgroundLogo} />
      <Line />
      <Menu colorSec={ThemeColor.secundaria}>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 0}
          onClick={() => handleButtonClick(0)}
        >
          <BiHomeAlt /> {SidebarText.home}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 1}
          onClick={() => handleButtonClick(1)}
        >
          <Tag /> {SidebarText.vendas}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 2}
          onClick={() => handleButtonClick(2)}
        >
          <Storefront /> {SidebarText.estabelecimentos}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 3}
          onClick={() => handleButtonClick(3)}
        >
          <Medal /> {SidebarText.licenciados}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 4}
          onClick={() => handleButtonClick(4)}
        >
          {/* <AiOutlinePercentage /> {SidebarText.plano} */}
        </ButtonSider>
        <ButtonSider
        colorSec={ThemeColor.secundaria}
          selected={selectedItem === 5}
          onClick={() => handleButtonClick(5)}
        >
          {/* <AiOutlineFileText /> {SidebarText.extrato} */}
        </ButtonSider>
        <ButtonSider
        colorSec={ThemeColor.secundaria}
          selected={selectedItem === 6}
          onClick={() => handleButtonClick(6)}
        >
          <Book /> {SidebarText.compliance}
        </ButtonSider>
        <ButtonSider
        colorSec={ThemeColor.secundaria}
          selected={selectedItem === 7}
          onClick={() => handleButtonClick(7)}
        >
          <Clipboard /> {SidebarText.solicitacoes}
        </ButtonSider>
      </Menu>
    </ContainerSidebar>
  )
}
