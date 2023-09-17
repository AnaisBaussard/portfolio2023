import React from 'react'
import { Meta } from '@storybook/react'

import { experiences } from 'config/experience'
import TileGroup, { TileGroupProps } from '../'

const Main = ({ mode, tilePerRow }: TileGroupProps) => {
  return <TileGroup mode={mode} tilePerRow={tilePerRow} tiles={experiences} />
}

export default {
  component: TileGroup,
  title: 'Components/Tile/Tile Group',
  args: {
    mode: 'default',
    tilePerRow: 0,
  },
  argTypes: {
    mode: {
      control: { type: 'radio' },
      description: "mode - accepts any key that fits a component's 'modes' object in the theme",
      options: ['default', 'icon', 'small'],
      table: {
        defaultValue: { summary: 'small' },
        type: { summary: 'string' },
      },
    },
    tilePerRow: {
      control: { type: 'number' },
      description: 'tilePerRow - accepts number',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
  },
} as Meta

export { Main as TileGroup }
