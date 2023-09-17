import styled, { Theme, css } from 'styled-components'

import { generateCssGradient, hexToRgba } from 'helpers/css'

import ButtonBase from '../../ButtonBase'
import { ButtonProps } from '..'

const generateButtonBackgroundGradient = (color: NonNullable<ButtonProps['color']>) =>
  generateCssGradient(
    [
      [color, '0'],
      [hexToRgba(color, 0.5), '100'],
    ],
    180,
  )

const ButtonContainer = styled(ButtonBase)<ButtonProps>`
  ${({ color: colorProp, disabled, isLoading, theme }) => {
    const color =
      theme.colors[colorProp as keyof Theme['colors']] ||
      colorProp ||
      theme.components.button.backgroundColor
    return css`
      background-color: ${color};
      background: ${generateButtonBackgroundGradient(color)};
      border-radius: ${theme.components.button.borderRadius};
      color: ${theme.components.button.color};
      cursor: ${theme.components.button.cursor};
      display: inline-block;
      font-family: ${theme.components.button.fontFamily};
      font-size: ${theme.components.button.fontSize};
      font-weight: ${theme.components.button.fontWeight};
      height: ${theme.components.button.height};
      line-height: ${theme.components.button.lineHeight};
      min-width: ${theme.components.button.minWidth};
      padding: ${theme.components.button.padding};
      text-align: center;
      text-decoration: none;
      transition: ${theme.components.button.transition};

      &:hover {
        color: ${theme.components.button.color};
      }

      ${disabled &&
      `
      background-color: ${color};
      cursor: ${theme.components.button.disabled.cursor};
    `};

      ${isLoading &&
      `
      background-color: ${color};
      cursor: ${theme.components.button.disabled.cursor};
    `};

      ${!isLoading &&
      !disabled &&
      `
      &:hover {
        background-color: ${color};
      }
      &:active {
        background: none;
        background-color: ${hexToRgba(color, 0.7)};
      }
    `}
    `
  }}
`

export default ButtonContainer
