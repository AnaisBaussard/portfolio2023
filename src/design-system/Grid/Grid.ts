import styled, { css, Theme } from 'styled-components'
import { isNil } from 'lodash'

import { generateMediaQuery } from 'helpers/css'
import { display, DisplayProps, sizes, SizeProps } from '../injectors'

export type GridProps = {
  cGap?: keyof Theme['sizes'] | string
  inline?: boolean
  rGap?: keyof Theme['sizes'] | string
  tAreas?: string
  tCols?: string
  tRows?: string
} & MdLgGridProps &
  MdGridProps &
  SmGridProps &
  DisplayProps &
  SizeProps

type MdLgGridProps = {
  mdLgCGap?: GridProps['cGap']
  mdLgRGap?: GridProps['rGap']
  mdLgTAreas?: GridProps['tAreas']
  mdLgTCols?: GridProps['tCols']
  mdLgTRows?: GridProps['tRows']
}

type MdGridProps = {
  mdCGap?: GridProps['cGap']
  mdRGap?: GridProps['rGap']
  mdTAreas?: GridProps['tAreas']
  mdTCols?: GridProps['tCols']
  mdTRows?: GridProps['tRows']
}

type SmGridProps = {
  smCGap?: GridProps['cGap']
  smRGap?: GridProps['rGap']
  smTAreas?: GridProps['tAreas']
  smTCols?: GridProps['tCols']
  smTRows?: GridProps['tRows']
}

const mdLgGridCss = css<MdLgGridProps>`
  ${({ mdLgCGap, mdLgRGap, mdLgTAreas, mdLgTCols, mdLgTRows, theme }) =>
    generateMediaQuery(
      { screenSize: 'mdLg', theme },
      css`
        ${!isNil(mdLgCGap) &&
        `grid-column-gap: ${theme.sizes[mdLgCGap as keyof Theme['sizes']] || mdLgCGap};`};
        ${!isNil(mdLgRGap) &&
        `grid-row-gap: ${theme.sizes[mdLgRGap as keyof Theme['sizes']] || mdLgRGap};`};
        ${mdLgTAreas && `grid-template-areas: ${mdLgTAreas};`};
        ${mdLgTCols && `grid-template-columns: ${mdLgTCols};`};
        ${mdLgTRows && `grid-template-rows: ${mdLgTRows};`};
      `,
    )}
`

const mdGridCss = css<MdGridProps>`
  ${({ mdCGap, mdRGap, mdTAreas, mdTCols, mdTRows, theme }) =>
    generateMediaQuery(
      { screenSize: 'md', theme },
      css`
        ${!isNil(mdCGap) &&
        `grid-column-gap: ${theme.sizes[mdCGap as keyof Theme['sizes']] || mdCGap};`};
        ${!isNil(mdRGap) &&
        `grid-row-gap: ${theme.sizes[mdRGap as keyof Theme['sizes']] || mdRGap};`};
        ${mdTAreas && `grid-template-areas: ${mdTAreas};`};
        ${mdTCols && `grid-template-columns: ${mdTCols};`};
        ${mdTRows && `grid-template-rows: ${mdTRows};`};
      `,
    )}
`

const smGridCss = css<SmGridProps>`
  ${({ smCGap, smRGap, smTAreas, smTCols, smTRows, theme }) =>
    generateMediaQuery(
      { screenSize: 'sm', theme },
      css`
        ${!isNil(smCGap) &&
        `grid-column-gap: ${theme.sizes[smCGap as keyof Theme['sizes']] || smCGap};`};
        ${!isNil(smRGap) &&
        `grid-row-gap: ${theme.sizes[smRGap as keyof Theme['sizes']] || smRGap};`};
        ${smTAreas && `grid-template-areas: ${smTAreas};`};
        ${smTCols && `grid-template-columns: ${smTCols};`};
        ${smTRows && `grid-template-rows: ${smTRows};`};
      `,
    )}
`

const Grid = styled.div<GridProps>`
  ${({ cGap, inline, rGap, tAreas, tCols, theme, tRows }) => css`
    display: ${inline ? 'inline-grid' : 'grid'};
    grid-template-columns: ${tCols || theme.components.grid.gridTemplateColumns};

    ${!isNil(cGap) && `grid-column-gap: ${theme.sizes[cGap as keyof Theme['sizes']] || cGap};`};
    ${!isNil(rGap) && `grid-row-gap: ${theme.sizes[rGap as keyof Theme['sizes']] || rGap};`};
    ${tAreas && `grid-template-areas: ${tAreas};`};
    ${tRows && `grid-template-rows: ${tRows};`};
  `}
  ${mdLgGridCss}
  ${mdGridCss}
  ${smGridCss}
  ${display}
  ${sizes}
`

export default Grid
