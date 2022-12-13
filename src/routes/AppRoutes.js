import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Favs } from '../pages/Favs'
import { ProtectedRoute } from './ProtectedRoute'

const RouteLoged = ({ element }) => (
  <ProtectedRoute>
    {element}
  </ProtectedRoute>
)

const Favs = React.lazy(() => import('../pages/Favs'))
const RegisterUser = React.lazy(() => import('../pages/RegisterUser'))
const Detail = React.lazy(() => import('../pages/Detail'))
const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const NotFound = React.lazy(() => import('../pages/NotFound'))
const User = React.lazy(() => import('../pages/User'))

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/pet/:id' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/sign-up' element={<RegisterUser />} />
      <Route path='/login' element={<Login />} />
      <Route path='/favs' element={<RouteLoged element={<Favs />} />} />
      <Route path='/user' element={<RouteLoged element={<User />} />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
