import { User, UserMock } from '@/mock/user';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextData {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(UserMock);

  const login = (email: string, password: string) => {
    
    // Verifica se o e-mail e a senha correspondem a um usuário no estado
    const matchedUser = users.find(user => user.email === email && user.password === password);

    if (matchedUser && matchedUser.token.isValid === true) {
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('user', JSON.stringify(matchedUser));
      setUser(matchedUser);
    } else {
      throw new Error('User not found');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const isLoggedInInStorage = sessionStorage.getItem('isLoggedIn');
    if (isLoggedInInStorage === 'true') {
      setIsLoggedIn(true);
      const userInStorage = sessionStorage.getItem('user');
      if (userInStorage) {
        setUser(JSON.parse(userInStorage));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
