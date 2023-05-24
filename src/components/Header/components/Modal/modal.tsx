import { useContext } from "react";
import { Button, ButtonClose, ContainerModal, ContextLine, Line } from "./styled";
import { AuthContext } from "@/context/user.login";

export function Modal(){
  const {logout} = useContext(AuthContext);

  return(
    <ContainerModal>
      <Button>Meus Dados</Button>
        <ContextLine>
        <Line />
      <Button>Usuários</Button>
      <Line />
        </ContextLine>
      <ButtonClose onClick={logout}>Sair</ButtonClose>
    </ContainerModal>
  )
}
