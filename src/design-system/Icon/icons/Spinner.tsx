import styled, { css, Theme } from 'styled-components'
import { rotate } from 'config/animations'

import { IconContainer } from '../styles'

const Spinner = styled(IconContainer).attrs({ as: 'i' })`
  ${({ color: colorProp, size, theme }) => {
    const height = theme.sizes[size as keyof Theme['sizes']] || size || theme.components.icon.height
    const width = theme.sizes[size as keyof Theme['sizes']] || size || theme.components.icon.width
    const color =
      theme.colors[colorProp as keyof Theme['colors']] || colorProp || theme.components.icon.fill

    return css`
      display: inline-block;

      &::after {
        content: ' ';
        display: block;
        height: ${height};
        width: ${width};
        border-radius: 50%;
        border: 3px solid;
        border-color: ${color} transparent ${color} transparent;
        animation: ${rotate} 1.2s linear infinite;
      }
    `
  }}
`

export default Spinner
