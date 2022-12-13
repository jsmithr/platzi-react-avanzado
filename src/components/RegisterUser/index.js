import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { useInputValue } from '../../hooks/useInputValue'
import { useRegisterMutation } from '../../hooks/useRegisterMutation'
import { SubmitButton } from '../SubmitButton/indexj'
import { Error, Form, Main, Politicies, TextField, Title } from './styles'

export const RegisterUser = () => {
  const email = useInputValue('')
  const password = useInputValue('')
  const navigate = useNavigate()
  const { activateAuth } = useContext(AppContext)
  const [dataRegister, registerMutation] = useRegisterMutation()

  const onSubmit = e => {
    const input = { email: email.value, password: password.value }
    const variable = { input }
    e.preventDefault()

    registerMutation({ variables: variable })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
      .then(() => navigate('/'))
      .catch((error) => {
        console.log(`Error mutation: ${error.message}`)
      })
  }

  const errorMsg = dataRegister.error && 'El usuario ya existe o hay algún problema.'

  return (
    <Main>
      <Title>Regístrate para ver fotos y videos de tus amigos.</Title>
      <Form onSubmit={onSubmit}>
        <TextField>
          <input
            type='text'
            placeholder='Email'
            disabled={dataRegister.loading}
            {...email}
          />
          <label>Email</label>
        </TextField>

        <TextField>
          <input
            type='password'
            placeholder='Password'
            disabled={dataRegister.loading}
            {...password}
          />
          <label>Password</label>
        </TextField>

        <Politicies>
          Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. <b>Más información</b>
        </Politicies>
        <Politicies>
          Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la <b>Política de cookies</b>.
        </Politicies>

        <SubmitButton disabled={!email.value || !password.value || dataRegister.loading}>
          Registrar
        </SubmitButton>

        {errorMsg && <Error>El usuario ya existe o hay algún problema</Error>}
      </Form>
    </Main>
  )
}
