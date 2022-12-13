import React from 'react'
import { Layout } from '../components/Layout'
import { NotFound as NotFoundComponent } from '../components/NotFound'

export default () => {
  return (
    <Layout title='Cerrar Sesión'>
      <NotFoundComponent />
    </Layout>
  )
}
