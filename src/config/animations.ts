import { keyframes, Theme } from 'styled-components'

export const fadeIn = ({ theme }: { theme: Theme }) => {
  return keyframes`
    0% {
      opacity: 0;
      transform: translateY(-${theme.sizes[1.25]});
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `
}

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
