import styled, { css } from 'styled-components'
import { doSkeleton } from '../../styles/skeleton'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  display:flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: none;
  outline: none;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  background-color: #ccc;

  ${props => props.loading && css`
    ${doSkeleton()}
  `}
`
export const Text = styled.span`
  color: #888888;
  text-transform: capitalize;
`
