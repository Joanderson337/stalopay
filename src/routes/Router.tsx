import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound/notFound'
import { DefaultLogin } from '@/layout/DefaultLogin/defaultLogin'
import { DefaultHome } from '@/layout/DefaultHome/defaultHome'
import { Suspense } from 'react'
import React from 'react'

const Home = React.lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })));
const RecoverPassWord = React.lazy(() => import('@/pages/Onboarding/RecoverPassword/recoverPassword').then(module => ({ default: module.RecoverPassWord })));
const ChangePassword = React.lazy(() => import('@/pages/Onboarding/ChangePassword/changePassword').then(module => ({ default: module.ChangePassword })));
const RegisterPassword = React.lazy(() => import('@/pages/Onboarding/RegisterPassword/registerPassword').then(module => ({ default: module.RegisterPassword })));
const Login = React.lazy(() => import('@/pages/Login/login').then(module => ({ default: module.Login })));

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  )
}
