import React from 'react'
import { Meta } from '@storybook/react'

import Cell, { CellProps } from '../Cell'
import Grid, { GridProps } from '../Grid'

const Main: React.VFC = ({
  $cols,
  $rows,
  area,
  cGap,
  inline,
  mdCols,
  rGap,
  smCols,
  tAreas,
  tCols,
  tRows,
}: CellProps & GridProps) => (
  <Grid cGap={cGap} inline={inline} rGap={rGap} tAreas={tAreas} tCols={tCols} tRows={tRows}>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      1
    </Cell>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      2
    </Cell>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      3
    </Cell>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      4
    </Cell>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      5
    </Cell>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      6
    </Cell>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      7
    </Cell>
    <Cell area={area} $cols={$cols} $rows={$rows} mdCols={mdCols} smCols={smCols}>
      8
    </Cell>
  </Grid>
)

export default {
  component: Grid,
  title: 'Components/Grid',
  parameters: {
    docs: {
      description: {
        component:
          'Use those components for easy access to CSS Grid through its props. More info on how to use CSS Grid here: https://learncssgrid.com/\n\nAlso supports the following responsive props:\n\n**Grid:**\n\n* `[md|sm]TAreas` = grid-template-areas\n* `[md|sm]TCols` = grid-template-columns\n* `[md|sm]TRows` = grid-template-rows\n\n**Cell:**\n\n* `[md|sm]Area` = grid-area\n* `[md|sm]Col` = grid-column\n* `[md|sm]Row` = grid-row',
      },
    },
  },
  args: {
    $cols: 3,
    $rows: '',
    area: '',
    cGap: 1,
    inline: false,
    mdCols: '',
    rGap: 1,
    smCols: '',
    tAreas: '',
    tCols: 'repeat(12, 1fr)',
    tRows: '',
  },
  argTypes: {
    $cols: {
      control: { type: 'text' },
      description:
        'grid-column - accepts string or number. Automatically prefixed by span if noSpanning is false',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '3 | span 3 | 1 / 4' },
      },
    },
    $rows: {
      control: { type: 'text' },
      description:
        'grid-row - accepts string or number. Automatically prefixed by span if noSpanning is false',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '3 | span 3 | 1 / 4' },
      },
    },
    area: {
      description: 'grid-area - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'header' },
      },
    },
    cGap: {
      control: { type: 'text' },
      description: 'grid-column-gap - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '3 | 2rem | 16px' },
      },
    },
    rGap: {
      control: { type: 'text' },
      description: 'grid-row-gap - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '3 | 2rem | 16px' },
      },
    },
    inline: {
      description: 'display: grid or display: inline-grid - accepts boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    tAreas: {
      description: 'grid-template-areas - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"header header" "content sidebar" "footer footer"' },
      },
    },
    tCols: {
      description: 'grid-template-columns - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'repeat(12, 1fr)' },
      },
    },
    tRows: {
      description: 'grid-template-rows - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '150px 1fr 100px' },
      },
    },
    mdCols: {
      control: { type: 'text' },
      description:
        'grid-column (tablet screen size) - accepts string or number. Automatically prefixed by span if noSpanning is false',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '3 | span 3 | 1 / 4' },
      },
    },
    smCols: {
      control: { type: 'text' },
      description:
        'grid-column (mobile screen size) - accepts string or number. Automatically prefixed by span if noSpanning is false',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '3 | span 3 | 1 / 4' },
      },
    },
  },
} as Meta

export { Main as Grid }
