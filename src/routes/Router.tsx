import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound/notFound'
import { DefaultLogin } from '@/layout/DefaultLogin/defaultLogin'
import { Home } from '@/pages/Home'
import { RecoverPassWord } from '@/pages/Onboarding/RecoverPassword/recoverPassword'
import { ChangePassword } from '@/pages/Onboarding/ChangePassword/changePassword'
import { RegisterPassword } from '@/pages/Onboarding/RegisterPassword/registerPassword'
import { Login } from '@/pages/Login/login'
import { DefaultHome } from '@/layout/DefaultHome/defaultHome'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DefaultLogin />}>
          <Route path="/" element={<Login />} />
          <Route path="/recover" element={<RecoverPassWord />} />
          <Route path="/changepassword/:tokenId" element={<ChangePassword />} />
          <Route path="/registerpassword/:tokenId" element={<RegisterPassword />} />
        </Route>

        <Route path='/' element={<DefaultHome />}>
            <Route path="/home" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  )
}
