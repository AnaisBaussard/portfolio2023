import React from 'react'
import { Meta } from '@storybook/react'
import { map } from 'lodash'

import { IconProps } from '../Icon'
import * as icons from '..'

const Main: React.VFC = ({ color, gradient, size }: IconProps) => (
  <>
    {map(icons, (Icon, index) => (
      <Icon color={color} gradient={gradient} key={`icons-${index}`} mb={1} mr={1} size={size} />
    ))}
  </>
)

export default {
  title: 'Components/Icons',
  parameters: {
    docs: {
      description: {
        component: `Components to be used to display svg icons. All of them contain the following injectors:\n\n* Container\n* Sizes`,
      },
    },
  },
  args: {
    color: 'darkGrey',
    gradient: '',
    size: '5',
  },
  argTypes: {
    color: {
      control: { type: 'color' },
      description: 'color - accepts theme color key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'primary | #FFFFFF',
        },
      },
    },
    gradient: {
      control: { type: 'text' },
      description: 'gradient - accepts theme gradients key',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'regate',
        },
      },
    },
    size: {
      control: { type: 'text' },
      description: 'size - accepts theme sizes key or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: {
          summary: '1 | 32px',
        },
      },
    },
  },
} as Meta

export { Main as Icons }
