import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))

  const value = {
    isAuth,
    activateAuth: t => {
      window.sessionStorage.setItem('token', t)
      setIsAuth(true)
    },
    removeAuth: t => {
      window.sessionStorage.removeItem('token')
      setIsAuth(false)
    }
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
