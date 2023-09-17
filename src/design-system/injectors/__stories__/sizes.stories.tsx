import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'

import sizes, { SizeProps } from '../sizes'

const SizesInjector = styled.div`
  ${sizes}
  border: 1px solid grey;
`

export const Sizes: React.VFC = ({ mb, ml, mr, mt, pb, pl, pr, pt }: SizeProps) => (
  <SizesInjector mb={mb} ml={ml} mr={mr} mt={mt} pb={pb} pl={pl} pr={pr} pt={pt}>
    Play with the controls!
  </SizesInjector>
)

export default {
  component: SizesInjector,
  title: 'Injectors/Sizes',
  parameters: {
    docs: {
      description: {
        component:
          'Inject this style into your component so it can support sizing props from the theme or custom values.',
      },
    },
  },
  args: {
    mb: '',
    ml: '',
    mr: '',
    mt: '',
    pb: 1,
    pl: '30px',
    pr: 1,
    pt: 1,
  },
  argTypes: {
    mb: {
      control: { type: 'text' },
      description: 'margin-bottom - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    ml: {
      control: { type: 'text' },
      description: 'margin-left - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    mr: {
      control: { type: 'text' },
      description: 'margin-right - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    mt: {
      control: { type: 'text' },
      description: 'margin-top - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    pb: {
      control: { type: 'text' },
      description: 'padding-bottom - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    pl: {
      control: { type: 'text' },
      description: 'padding-left - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    pr: {
      control: { type: 'text' },
      description: 'padding-right - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
    pt: {
      control: { type: 'text' },
      description: 'padding-top - accepts sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '3 | 36px' },
      },
    },
  },
} as Meta
