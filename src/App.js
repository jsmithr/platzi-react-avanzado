import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <Navbar />
    </BrowserRouter>
  )
}
