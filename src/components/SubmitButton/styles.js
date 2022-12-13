import styled from 'styled-components'

export const Button = styled.button`
width: 100%;
color: #fff;
background-color: #0095f6;
font-weight: 600;
padding: 8px 9px;
border-radius: 4px;
margin: 20px 0px;

&[disabled] {
  background-color: rgba(0,149,246,.3);
}
`
