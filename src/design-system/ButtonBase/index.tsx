import React from 'react'
import styled, { css } from 'styled-components'

import {
  container,
  ContainerProps,
  display,
  DisplayProps,
  SizeProps,
  sizes,
  text,
  TextProps,
} from '../injectors'

export type ButtonBaseProps = React.HTMLProps<HTMLButtonElement> &
  ContainerProps &
  DisplayProps &
  SizeProps &
  TextProps

const ButtonBase = styled.button<ButtonBaseProps>`
  ${({ disabled, theme }) => css`
    cursor: ${disabled ? theme.components.button.disabled.cursor : theme.components.button.cursor};
    ${disabled &&
    `
      opacity: ${theme.components.button.disabled.opacity};
    `}
  `}
  ${container}
  ${display}
  ${sizes}
  ${text}
`

export default ButtonBase
