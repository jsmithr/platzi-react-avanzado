import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Form = styled.div`
  padding: 10px;
  width: 100%;

`
export const LogoSection = styled.section`
  width: 100%;
  text-align: center;
`
export const NotAccount = styled.p`
  margin-top: 12px;
  text-align: center;
  color: #8e8e8e;
  & a {
    color: #0095f6;
    font-weight: 600;
    font-size: 14px;
  }
`
export const RegisterLink = styled(NavLink)`
  color: #0095f6;
  font-weight: 600;
  font-size: 14px;
`
