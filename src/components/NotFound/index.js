import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitButton } from '../SubmitButton/indexj'
import { Main } from './style'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <h2>
        Está página no existe
      </h2>
      <SubmitButton onClick={() => navigate('/')}>
        Ir a la página principal
      </SubmitButton>
    </Main>
  )
}
