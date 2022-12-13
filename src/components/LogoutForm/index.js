import React, { useContext } from 'react'
import { Form } from './styles'
import { AppContext } from '../../context/AppContext'
import { SubmitButton } from '../SubmitButton/indexj'

export const LogoutForm = () => {
  const { removeAuth } = useContext(AppContext)

  return (
    <Form>

      <SubmitButton onClick={removeAuth}>
        Cerrar Sesión
      </SubmitButton>
    </Form>
  )
}
