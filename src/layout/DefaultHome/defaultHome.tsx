import { Sidebar } from '@/components/Sidebar/sidebar'
import { ContainerContext, ContainerDefaultHome, ContainerSidebarDefault, ContextHome } from './styled'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header/header'
import { AuthContext } from "@/context/user.login";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DefaultHome() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn){
      navigate('/')
    }
  })


  return (
    <ContainerDefaultHome>
      <ContainerSidebarDefault>
        <Sidebar />
      </ContainerSidebarDefault>
      <ContainerContext>
        <Header />
        <ContextHome>
        <Outlet />
        </ContextHome>
      </ContainerContext>
    </ContainerDefaultHome>
  )
}
