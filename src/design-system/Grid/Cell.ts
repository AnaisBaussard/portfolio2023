import styled, { css } from 'styled-components'

import { generateMediaQuery } from 'helpers/css'
import { DisplayProps, SizeProps, display, sizes } from '../injectors'

export type CellProps = {
  $cols?: string | number
  $rows?: string | number
  area?: string
  noSpanning?: boolean
} & MdLgCellProps &
  MdCellProps &
  SmCellProps &
  DisplayProps &
  SizeProps

type MdLgCellProps = {
  mdLgArea?: CellProps['area']
  mdLgCols?: CellProps['$cols']
  mdLgRows?: CellProps['$rows']
}

type MdCellProps = {
  mdArea?: CellProps['area']
  mdCols?: CellProps['$cols']
  mdRows?: CellProps['$rows']
}

type SmCellProps = {
  smArea?: CellProps['area']
  smCols?: CellProps['$cols']
  smRows?: CellProps['$rows']
}

const handleSpanning = (noSpanning: CellProps['noSpanning']) => (!noSpanning ? 'span ' : '')

const mdLgCellCss = css<MdLgCellProps & { noSpanning?: CellProps['noSpanning'] }>`
  ${({ mdLgArea, mdLgCols, mdLgRows, noSpanning, theme }) =>
    generateMediaQuery(
      { screenSize: 'mdLg', theme },
      css`
        ${mdLgArea && `grid-area: ${mdLgArea};`};
        ${mdLgCols && `grid-column: ${handleSpanning(noSpanning)}${mdLgCols};`};
        ${mdLgRows && `grid-row: ${handleSpanning(noSpanning)}${mdLgRows};`};
      `,
    )}
`

const mdCellCss = css<MdCellProps & { noSpanning?: CellProps['noSpanning'] }>`
  ${({ mdArea, mdCols, mdRows, noSpanning, theme }) =>
    generateMediaQuery(
      { screenSize: 'md', theme },
      css`
        ${mdArea && `grid-area: ${mdArea};`};
        ${mdCols && `grid-column: ${handleSpanning(noSpanning)}${mdCols};`};
        ${mdRows && `grid-row: ${handleSpanning(noSpanning)}${mdRows};`};
      `,
    )}
`

const smCellCss = css<SmCellProps & { noSpanning?: CellProps['noSpanning'] }>`
  ${({ smArea, smCols, smRows, noSpanning, theme }) =>
    generateMediaQuery(
      { screenSize: 'sm', theme },
      css`
        ${smArea && `grid-area: ${smArea};`};
        ${smCols && `grid-column: ${handleSpanning(noSpanning)}${smCols};`};
        ${smRows && `grid-row: ${handleSpanning(noSpanning)}${smRows};`};
      `,
    )}
`

const Cell = styled.div<CellProps>`
  ${({ $cols, $rows, area, noSpanning }) => css`
    ${area && `grid-area: ${area};`};
    ${$cols && `grid-column: ${handleSpanning(noSpanning)}${$cols};`};
    ${$rows && `grid-row: ${handleSpanning(noSpanning)}${$rows};`};
  `}
  ${mdLgCellCss}
  ${mdCellCss}
  ${smCellCss}
  ${display}
  ${sizes}
`

export default Cell
