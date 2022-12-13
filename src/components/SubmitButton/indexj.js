import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ onClick, disabled, children, props }) => {
  return (
    <Button
      type='submit'
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}
