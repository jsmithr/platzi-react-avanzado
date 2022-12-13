import React from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>

      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content='Busca animales domésticos' />
        {title && <title>{title} | Petgram</title>}
        {subtitle && <title>{subtitle} | Petgram</title>}
      </Helmet>
      <main>
        {children}
      </main>
    </>
  )
}
