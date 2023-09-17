import { css, Theme } from 'styled-components'
import { isNil } from 'lodash'

/**
 * Inject this style into your component so it can support spacing props from the theme or custom values.
 *
 * Check the storybook for full documentation!
 */

type ThemeSizesKey = keyof Theme['sizes'] | string

export type SizeProps = {
  mb?: ThemeSizesKey
  ml?: ThemeSizesKey
  mr?: ThemeSizesKey
  mt?: ThemeSizesKey
  pb?: ThemeSizesKey
  pl?: ThemeSizesKey
  pr?: ThemeSizesKey
  pt?: ThemeSizesKey
}

export default css<SizeProps>`
  ${({ mb, ml, mr, mt, pb, pl, pr, pt, theme }) => css<SizeProps>`
    ${!isNil(mb) && `margin-bottom: ${theme.sizes[mb as keyof Theme['sizes']] || mb};`};
    ${!isNil(ml) && `margin-left: ${theme.sizes[ml as keyof Theme['sizes']] || ml};`};
    ${!isNil(mr) && `margin-right: ${theme.sizes[mr as keyof Theme['sizes']] || mr};`};
    ${!isNil(mt) && `margin-top: ${theme.sizes[mt as keyof Theme['sizes']] || mt};`};
    ${!isNil(pb) && `padding-bottom: ${theme.sizes[pb as keyof Theme['sizes']] || pb};`};
    ${!isNil(pl) && `padding-left: ${theme.sizes[pl as keyof Theme['sizes']] || pl};`};
    ${!isNil(pr) && `padding-right: ${theme.sizes[pr as keyof Theme['sizes']] || pr};`};
    ${!isNil(pt) && `padding-top: ${theme.sizes[pt as keyof Theme['sizes']] || pt};`};
  `}
`
