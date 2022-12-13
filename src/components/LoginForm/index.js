import React, { useContext } from 'react'
import { LogoPetsLove } from '../Logo'
import { UserForm } from '../UserForm'
import { Form, LogoSection, NotAccount, RegisterLink } from './styles'
import { AppContext } from '../../context/AppContext'
import { useLoginMutation } from '../../hooks/useLoginMutation'

export const LoginForm = () => {
  const { activateAuth } = useContext(AppContext)
  const [dataRegister, loginMutation] = useLoginMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }

    loginMutation({ variables: variable })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
      .catch((error) => {
        console.log(`Error mutation: ${error.message}`)
      })
  }

  const errorMsg = dataRegister.error && 'No existe un usuario con el email ingresado.'

  return (
    <Form>
      <LogoSection>
        <LogoPetsLove />
      </LogoSection>

      <UserForm
        onSubmit={onSubmit}
        error={errorMsg}
        loading={dataRegister.loading}
      />

      <NotAccount>
        ¿No tienes una cuenta? <RegisterLink to='/sign-up'>Regístrate</RegisterLink>
      </NotAccount>
    </Form>
  )
}
