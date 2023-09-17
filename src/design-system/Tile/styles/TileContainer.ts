import styled, { css, Theme } from 'styled-components'

import { Title } from '../../Typography'
import { TileContainerProps } from '../'

const TileContainer = styled.div<TileContainerProps>`
  ${({ color, gradient, mode, theme }) => css`
    align-items: center;
    background-color: ${theme.colors[color as keyof Theme['colors']] || color};
    background: ${theme.gradients[gradient as keyof Theme['gradients']] as string};
    color: ${theme.components.tile.color};
    display: flex;
    font-family: ${theme.components.tile.fontFamily};
    font-family: ${theme.components.tile.fontFamily};
    font-size: ${theme.components.tile.fontSize};
    font-weight: ${theme.components.tile.fontWeight};
    height: ${theme.components.tile[mode].height};
    justify-content: center;
    width: ${theme.components.tile[mode].width};

    > img {
      height: auto;
      max-width: 60%;
    }

    > ${Title} {
      color: ${theme.components.tile.color};
      text-align: center;
    }
  `}
`

export default TileContainer
