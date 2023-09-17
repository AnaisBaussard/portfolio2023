import React from 'react'
import { Meta } from '@storybook/react'

import Layout, { LayoutProps } from '../'

const Main = ({ bottomMargin, topMargin }: LayoutProps) => {
  return (
    <Layout bottomMargin={bottomMargin} topMargin={topMargin}>
      Play with the controls!
    </Layout>
  )
}

export default {
  component: Layout,
  title: 'Components/Layout',
  parameters: {
    docs: {
      description: {
        component: 'Contains the following injectors:\n\n* Container\n* Display\n* Sizes\n* Text',
      },
    },
  },
  args: {
    bottomMargin: false,
    topMargin: false,
  },
  argTypes: {
    bottomMargin: {
      control: { type: 'boolean' },
      description: 'bottomMargin - accepts boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    topMargin: {
      control: { type: 'boolean' },
      description: 'topMargin - accepts boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} as Meta

export { Main as Layout }
