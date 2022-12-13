import styled, { css } from 'styled-components'
import { doSkeleton } from '../../styles/skeleton'

export const ItemLoading = styled.li`
  height: 150px;
  width: 100%;
  margin-bottom: 20px;
  background-color: #eeeeee;
  
  ${props => props.loading && css`
    ${doSkeleton()}
  `}
`
