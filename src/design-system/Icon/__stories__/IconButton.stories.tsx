import React from 'react'
import { Meta } from '@storybook/react'

import ButtonBase, { ButtonBaseProps } from '../../ButtonBase'
import { Bars } from '../'

const Main = ({ disabled }: ButtonBaseProps) => (
  <>
    <ButtonBase onClick={() => console.log('click')} disabled={disabled}>
      <Bars size={3} />
    </ButtonBase>
  </>
)

export default {
  component: ButtonBase,
  title: 'Components/Icons/Icon Button',
  parameters: {
    docs: {
      description: {
        component:
          'Uses ButtonBase as a wrapper.\n\nContains the following injectors:\n\n* Container\n* Display\n* Sizes\n* Text',
      },
    },
  },
  args: {
    disabled: false,
  },
  argTypes: {
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
  },
} as Meta

export { Main as IconButton }
