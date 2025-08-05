import { keyframes } from '@emotion/react'

export const makeSkeletonBackgroundAnimation = (from: string, to: string) => keyframes`
  0% {
    background-color: ${from};
  }

  10% {
    background-color: ${to};
  }

  20% {
    background-color: ${from};
  }
`
