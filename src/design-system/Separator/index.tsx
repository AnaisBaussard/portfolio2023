import styled, { css, Theme } from 'styled-components'

import { generateMediaQuery } from 'helpers/css'
import { container, ContainerProps, SizeProps, sizes } from '../injectors'

export type SeparatorProps = {
  color?: keyof Theme['colors'] | string
  isVertical?: boolean
}

const Separator = styled.hr.attrs({ 'data-testid': 'separator' })<
  ContainerProps & SeparatorProps & SizeProps
>`
  ${({ color, isVertical, theme }) => css`
    border: none;
    background-color: ${theme.components.separator.backgroundColor};
    position: relative;
    ${isVertical && 'margin: 0;'};
    ${isVertical ? 'width' : 'height'}: 1px;
    ${isVertical ? 'height' : 'width'}: ${theme.components.separator.size};

    ${generateMediaQuery(
      { screenSize: 'sm', theme },
      `
      ${isVertical ? 'height' : 'width'}:  ${theme.components.separator.sm.size};
    `,
    )}

    &::after {
      content: '';
      background-color: ${theme.colors[color as keyof Theme['colors']] ||
      color ||
      theme.components.separator.after.backgroundColor};
      left: 0;
      position: absolute;
      top: 0;
      ${isVertical ? 'width' : 'height'}: 1px;
      ${isVertical ? 'height' : 'width'}: ${theme.components.separator.after.size};
    }
  `}
  ${container}
  ${sizes}
`

export default Separator
