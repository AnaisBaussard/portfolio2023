import React from 'react'
import { Meta } from '@storybook/react'

import Separator, { SeparatorProps } from '..'
import Div from '../../Div'

const Main: React.VFC = ({ color, isVertical }: SeparatorProps) =>
  !isVertical ? (
    <Separator color={color} />
  ) : (
    <>
      Separator can be vertical if it is placed within a flex container.
      <Div di="f" h="250px">
        <Separator color={color} isVertical />
      </Div>
    </>
  )

export default {
  component: Separator,
  title: 'Components/Separator',
  parameters: {
    docs: {
      description: {
        component: 'Contains the following injectors:\n\n* Container\n* Sizes',
      },
    },
  },
  args: {
    color: 'primary',
    isVertical: false,
  },
  argTypes: {
    color: {
      control: { type: 'color' },
      description: 'border-color - accepts theme color key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary | #FFFFFF' },
      },
    },
    isVertical: {
      control: { type: 'boolean' },
      description: 'isVertical - accepts boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta

export { Main as Separator }
