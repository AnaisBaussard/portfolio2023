import { css, Theme } from 'styled-components'
import { isNil } from 'lodash'

/**
 * Inject this style into your component so it can support text props from the theme or custom values.
 *
 * Check the storybook for full documentation!
 */

export type TextProps = {
  italic?: boolean
  tAlign?: 'center' | 'left' | 'right' | string
  tColor?: keyof Theme['colors'] | string
  tSize?: keyof Theme['sizes'] | string
  tTransform?: 'capitalize' | 'uppercase' | 'lowercase' | string
  weight?: keyof Theme['weights'] | number | string
}

export default css<TextProps>`
  ${({ italic, tAlign, tColor, theme, tSize, tTransform, weight }) => css`
    ${italic && `font-style: italic;`};
    ${tAlign && `text-align: ${tAlign};`};
    ${tColor && `color: ${theme.colors[tColor as keyof Theme['colors']] || tColor};`};
    ${!isNil(tSize) && `font-size: ${theme.sizes[tSize as keyof Theme['sizes']] || tSize};`};
    ${tTransform && `text-transform: ${tTransform};`};
    ${weight && `font-weight: ${theme.weights[weight as keyof Theme['weights']] || weight};`};
  `}
`
