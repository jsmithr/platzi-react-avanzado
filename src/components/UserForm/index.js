import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton/indexj'
import { Error, ForgotPassword, Form, TextField } from './styles'

export const UserForm = ({ onSubmit, error = '', loading = false }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextField>
        <input
          type='text'
          placeholder='Email'
          disabled={loading}
          {...email}
        />
        <label>Email</label>
      </TextField>

      <TextField>
        <input
          type='password'
          placeholder='Password'
          disabled={loading}
          {...password}
        />
        <label>Password</label>
      </TextField>

      <SubmitButton onClick={handleSubmit} disabled={!email.value || !password.value || loading}>
        Iniciar Sesión
      </SubmitButton>

      {error && <Error>{error}</Error>}

      <ForgotPassword>
        <a>¿Olvidaste tu contraseña?</a>
      </ForgotPassword>
    </Form>
  )
}
