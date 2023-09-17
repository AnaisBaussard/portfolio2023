import React, { useRef, useState } from 'react'
import { Meta } from '@storybook/react'

import Button from '../../Button'
import Drawer, { DrawerProps } from '..'

const Main = ({ open }: DrawerProps) => {
  const [controlledIsOpened, setIsOpened] = useState(false)
  const buttonRef = useRef(null)
  return (
    <>
      <Button
        di="b"
        ml="auto"
        mr="auto"
        onClick={() => setIsOpened(!controlledIsOpened)}
        ref={buttonRef}
      >{`${controlledIsOpened ? 'Close' : 'Open'} drawer`}</Button>
      <Drawer
        buttonRef={buttonRef}
        open={open || controlledIsOpened}
        onClose={() => setIsOpened(false)}
      >
        Content !
      </Drawer>
    </>
  )
}

export default {
  component: Drawer,
  title: 'Components/Drawer',
  parameters: {
    docs: {
      description: {
        component: 'Contains the following injectors:\n\n* Container\n* Display',
      },
    },
  },
  args: {
    open: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    onClose: {
      description: 'onClose - accepts function, closes the drawer',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: '() => void' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description: 'open - accepts boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta

export { Main as Drawer }
