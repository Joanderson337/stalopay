import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global';
import { defaultTheme } from '@/styles/theme';
import { Router } from '@routes/Router';
import { AuthContextProvider } from './context/user.login';


export function App() {
  return (
    <AuthContextProvider>
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
    </AuthContextProvider>
  );
}
