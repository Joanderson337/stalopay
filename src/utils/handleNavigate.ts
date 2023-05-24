import { NavigateFunction } from 'react-router-dom'

export const handleLogin = (navigate: NavigateFunction) => {
  navigate('/')
}

export const handleRecover = (navigate: NavigateFunction) => {
  navigate('/recover')
}
