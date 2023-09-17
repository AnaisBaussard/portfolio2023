import React from 'react'
import { Meta } from '@storybook/react'

import Link from '../../Link'
import Button, { ButtonProps } from '..'

const Main: React.VFC = ({ color, disabled, isLoading }: ButtonProps) => (
  <>
    <Button color={color} disabled={disabled} isLoading={isLoading}>
      Play with the controls!
    </Button>
    <br />
    <br />
    <Button
      as={Link}
      color={color}
      disabled={disabled}
      href="https://reactrouter.com/web/api/Link"
      isExternal
      isLoading={isLoading}
    >
      Button as link
    </Button>
  </>
)

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component:
          'Uses ButtonBase as a wrapper.\n\nContains the following injectors:\n\n* Container\n* Display\n* Sizes\n* Text',
      },
    },
  },
  args: {
    color: 'primary',
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    color: {
      control: { type: 'color' },
      description: 'color - accepts theme color key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary | secondary | #000000' },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    disabled: {
      description: 'disabled - boolean value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isLoading: {
      description: 'isLoading - boolean value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta

export { Main as Button }
