import { useNavigate, useParams } from "react-router-dom";
import { PasswordChange } from "./components/PasswordChange/passwordChange";
import { useEffect } from "react";

export function ChangePassword(){
  const { tokenId } = useParams()
  const navigate = useNavigate();
  const tokenEmail = 'teste@gmail.com.'

  useEffect(() => {
    if (tokenId !== '123') {
      navigate('/token-invalido');
    }
  }, [tokenId, navigate]);

  return(
    <>
      <PasswordChange email={tokenEmail} />
    </>
  )
}
