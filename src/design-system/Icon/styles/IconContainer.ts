import styled, { css, Theme } from 'styled-components'

import { container, sizes } from '../../injectors'
import { IconProps } from '../Icon'

const IconContainer = styled.svg<IconProps>`
  ${({ isClickable, color, theme, size }) => css`
    fill: ${theme.colors[color as keyof Theme['colors']] || color || theme.components.icon.fill};
    height: ${theme.sizes[size as keyof Theme['sizes']] || size || theme.components.icon.height};
    width: ${theme.sizes[size as keyof Theme['sizes']] || size || theme.components.icon.width};
    ${isClickable &&
    `
      transition: fill ${theme.animations.quickEaseOut};
      &:hover {
        fill: ${theme.colors.violet};
      }
    `}
  `}
  ${container}
  ${sizes}
`

export default IconContainer
