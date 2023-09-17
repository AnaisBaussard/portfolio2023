import React from 'react'
import { Meta } from '@storybook/react'

import Div, { DivProps } from '..'

const Main: React.VFC = ({ bgC, di, jc, mt, tColor }: DivProps) => (
  <Div bgC={bgC} di={di} jc={jc} mt={mt} tColor={tColor}>
    This component supports all CSS props from injectors. Try it out!
  </Div>
)

export default {
  component: Div,
  title: 'Components/Div',
  parameters: {
    docs: {
      description: {
        component: 'This component supports all CSS props from injectors.',
      },
    },
  },
  args: {
    bgC: 'lightGrey',
    di: 'f',
    jc: 'ce',
    mt: '4',
    tColor: 'primary',
  },
  argTypes: {
    bgC: {
      control: { type: 'color' },
      description: 'background-color - accepts theme color key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary | #FFFFFF' },
      },
    },
    di: {
      description: 'display - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'b | block | f | flex' },
      },
    },
    jc: {
      description: 'justify-content - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sb | space-between | fs | flex-end' },
      },
    },
    mt: {
      control: { type: 'text' },
      description: 'margin-top - accepts spaces key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    tColor: {
      control: { type: 'color' },
      description: 'color - accepts theme color key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary | #FFFFFF' },
      },
    },
  },
} as Meta

export { Main as Div }
