import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'

import container, { ContainerProps } from '../container'

const ContainerInjector = styled.div`
  ${container}
`

export const Container: React.VFC = ({ bg, bgC, h, maxH, maxW, minH, minW, w }: ContainerProps) => (
  <ContainerInjector bg={bg} bgC={bgC} h={h} maxH={maxH} maxW={maxW} minH={minH} minW={minW} w={w}>
    Play with the controls!
  </ContainerInjector>
)

export default {
  component: ContainerInjector,
  title: 'Injectors/Container',
  parameters: {
    docs: {
      description: {
        component:
          'Inject this style into your component so it can support container sizing & background color props from the theme or custom values.',
      },
    },
  },
  args: {
    bg: '',
    bgC: 'lightGrey',
    h: 3,
    maxH: '',
    maxW: '',
    minH: '',
    minW: '',
    w: '100%',
  },
  argTypes: {
    bg: {
      control: { type: 'text' },
      description: 'background - accepts theme gradients key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regateGradient' },
      },
    },
    bgC: {
      control: { type: 'color' },
      description: 'background-color - accepts theme color key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary | #FFFFFF' },
      },
    },
    h: {
      control: { type: 'text' },
      description: 'height - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '12 | 100px' },
      },
    },
    maxH: {
      control: { type: 'text' },
      description: 'max-height - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '12 | 100px' },
      },
    },
    maxW: {
      control: { type: 'text' },
      description: 'max-width - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '12 | 100px' },
      },
    },
    minH: {
      control: { type: 'text' },
      description: 'min-height - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '12 | 100px' },
      },
    },
    minW: {
      control: { type: 'text' },
      description: 'min-width - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '12 | 100px' },
      },
    },
    w: {
      control: { type: 'text' },
      description: 'width - accepts theme sizes key (number) or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '12 | 100px' },
      },
    },
  },
} as Meta
