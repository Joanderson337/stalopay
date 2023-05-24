import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PasswordRegister } from './components/PasswordRegister/passwordRegister';

export function RegisterPassword() {
  const { tokenId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenId !== '123') {
      navigate('/token-invalido');
    }
  }, [tokenId, navigate]);

  return (
    <PasswordRegister />
  );
}

