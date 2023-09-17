import { css, Theme } from 'styled-components'
import { isNil } from 'lodash'

/**
 * Inject this style into your component so it can support display props from the theme or custom values.
 *
 * Check the storybook for full documentation!
 */

type SelfAlignValues =
  | 'auto'
  | 'end'
  | 'e'
  | 'flex-start'
  | 'fs'
  | 'flex-end'
  | 'fe'
  | 'center'
  | 'ce'
  | 'baseline'
  | 'b'
  | 'start'
  | 'st'
  | 'stretch'
  | 's'

type ContentAlignValues = 'space-between' | 'sb' | 'space-around' | 'sa' | 'space-evenly' | 'se'

export type DisplayProps = {
  ac?: SelfAlignValues | ContentAlignValues | string
  ai?: SelfAlignValues | string
  als?: SelfAlignValues | string
  di?:
    | 'b'
    | 'block'
    | 'i'
    | 'inline'
    | 'ib'
    | 'inline-block'
    | 'if'
    | 'inline-flex'
    | 'f'
    | 'flex'
    | string
  fb?: 'auto' | 'min-content' | 'max-content' | string
  fd?: 'row' | 'r' | 'row-reverse' | 'rr' | 'column' | 'c' | 'column-reverse' | 'cr' | string
  fg?: number | string
  fs?: number | string
  fw?: 'nowrap' | 'nw' | 'wrap' | 'w' | 'wrap-reverse' | 'wr' | string
  g?: keyof Theme['sizes'] | string
  jc?: SelfAlignValues | ContentAlignValues | string
  ji?: SelfAlignValues | string
  js?: SelfAlignValues | string
  or?: number
}

export const resolvedMap = {
  ba: 'baseline',
  b: 'block',
  c: 'column',
  ce: 'center',
  cr: 'column-reverse',
  e: 'end',
  f: 'flex',
  fe: 'flex-end',
  fs: 'flex-start',
  i: 'inline',
  ib: 'inline-block',
  if: 'inline-flex',
  nw: 'nowrap',
  r: 'row',
  rr: 'row-reverse',
  s: 'stretch',
  sa: 'space-around',
  sb: 'space-between',
  se: 'space-evenly',
  st: 'start',
  w: 'wrap',
  wr: 'wrap-reverse',
}

export default css<DisplayProps>`
  ${({ ac, ai, als, di, fb, fd, fg, fs, fw, g, jc, ji, js, or, theme }) => css`
    ${ac && `align-content: ${resolvedMap[ac as keyof typeof resolvedMap] || ac}`};
    ${ai && `align-items: ${resolvedMap[ai as keyof typeof resolvedMap] || ai}`};
    ${als && `align-self: ${resolvedMap[als as keyof typeof resolvedMap] || als}`};
    ${di && `display: ${resolvedMap[di as keyof typeof resolvedMap] || di}`};
    ${fb && `flex-basis: ${fb}`};
    ${fd && `flex-direction: ${resolvedMap[fd as keyof typeof resolvedMap] || fd}`};
    ${fg && `flex-grow: ${fg}`};
    ${fs && `flex-shrink: ${fs}`};
    ${fw && `flex-wrap: ${resolvedMap[fw as keyof typeof resolvedMap] || fw}`};
    ${!isNil(g) && `gap: ${theme.sizes[g as keyof Theme['sizes']] || g}`};
    ${jc && `justify-content: ${resolvedMap[jc as keyof typeof resolvedMap] || jc}`};
    ${ji && `justify-items: ${resolvedMap[ji as keyof typeof resolvedMap] || ji}`};
    ${js && `justify-self: ${resolvedMap[js as keyof typeof resolvedMap] || js}`};
    ${or && `order: ${or}`};
  `}
`
