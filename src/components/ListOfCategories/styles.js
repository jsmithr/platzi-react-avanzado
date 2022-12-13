import styled, { css, keyframes } from 'styled-components'

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${bounceDownKeyFrames} ${type};
`

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  ${props => props.fixed && css`
    ${bounceDown()}
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      right: 0;
      top: -0px;
      margin: 0 auto;
      max-width: 400px;
      padding: 10px;
      position: fixed;
      transform: scale(.5);
      z-index: 1;

      & span {
        display: none;
      }
  `}
`
export const Item = styled.li`
  padding: 0 8px;
`
