import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext)

  if (!isAuth) {
    return <Navigate to='/login' />
  }

  return children
}
