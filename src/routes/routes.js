import React from 'react'
import { Detail } from '../pages/Detail'
// import { Favs } from '../pages/Favs'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import RegisterUser from '../pages/RegisterUser'
import { User } from '../pages/User'
import { ProtectedRoute } from './ProtectedRoute'

const RouteLoged = ({ element }) => (
  <ProtectedRoute>
    {element}
  </ProtectedRoute>
)

const Favs = React.lazy(() => import('../pages/Favs'))

export const routes = [
  { path: '/pet/:id', element: <Home /> },
  { path: '/detail/:id', element: <Detail /> },
  { path: '/sign-up', element: <RegisterUser /> },
  { path: '/login', element: <Login /> },
  { path: '/favs', element: <RouteLoged element={<Favs />} /> },
  { path: '/user', element: <RouteLoged element={<User />} /> },
  { path: '/', element: <Home /> },
  { path: '*', element: <NotFound /> }
]
