import { css, keyframes } from 'styled-components'

const loadingSkeleton = () => keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

export const doSkeleton = () => css`
  background-color: #eee;
`

export const doSkeletonAnimation = () => css`
  animation: ${loadingSkeleton()} 1.5s linear infinite alternate;
`
