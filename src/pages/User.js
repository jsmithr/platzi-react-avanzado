import React from 'react'
import { Layout } from '../components/Layout'
import { LogoutForm } from '../components/LogoutForm'

export default () => {
  return (
    <Layout title='Cerrar Sesión'>
      <LogoutForm />
    </Layout>
  )
}
