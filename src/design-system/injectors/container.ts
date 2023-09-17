import { css, Theme } from 'styled-components'
import { isNil } from 'lodash'

/**
 * Inject this style into your component so it can support container sizing & background color props
 * from the theme or custom values.
 *
 * Check the storybook for full documentation!
 */

export type ContainerProps = {
  bg?: keyof Theme['gradients'] | string
  bgC?: keyof Theme['colors'] | string
  h?: keyof Theme['sizes'] | string
  maxH?: keyof Theme['sizes'] | string
  maxW?: keyof Theme['sizes'] | string
  minH?: keyof Theme['sizes'] | string
  minW?: keyof Theme['sizes'] | string
  w?: keyof Theme['sizes'] | string
}

export default css<ContainerProps>`
  ${({ bg, bgC, h, maxH, maxW, minH, minW, theme, w }) => css`
    ${bgC && `background-color: ${theme.colors[bgC as keyof Theme['colors']] || bgC};`};
    ${bg && `background: ${theme.gradients[bg as keyof Theme['gradients']] || bg};`};
    ${!isNil(h) && `height: ${theme.sizes[h as keyof Theme['sizes']] || h};`};
    ${!isNil(maxH) && `max-height: ${theme.sizes[maxH as keyof Theme['sizes']] || maxH};`};
    ${!isNil(minH) && `min-height: ${theme.sizes[minH as keyof Theme['sizes']] || minH};`};
    ${!isNil(w) && `width: ${theme.sizes[w as keyof Theme['sizes']] || w};`};
    ${!isNil(maxW) && `max-width: ${theme.sizes[maxW as keyof Theme['sizes']] || maxW};`};
    ${!isNil(minW) && `min-width: ${theme.sizes[minW as keyof Theme['sizes']] || minW};`};
  `}
`
