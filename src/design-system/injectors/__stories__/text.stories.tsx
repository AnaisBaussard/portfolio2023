import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'

import text, { TextProps } from '../text'

const TextInjector = styled.div`
  ${text}
`

export const Text: React.VFC = ({
  italic,
  tAlign,
  tColor,
  tSize,
  tTransform,
  weight,
}: TextProps) => (
  <TextInjector
    italic={italic}
    tAlign={tAlign}
    tColor={tColor}
    tSize={tSize}
    tTransform={tTransform}
    weight={weight}
  >
    Play with the controls!
  </TextInjector>
)

export default {
  component: TextInjector,
  title: 'Injectors/Text',
  parameters: {
    docs: {
      description: {
        component:
          'Inject this style into your component so it can support text props from the theme or custom values.',
      },
    },
  },
  args: {
    italic: true,
    tAlign: 'center',
    tColor: 'primary',
    tSize: '',
    tTransform: '',
    weight: 'bold',
  },
  argTypes: {
    italic: {
      description: 'determines whether the text is italic or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    tAlign: {
      description: 'text-align - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left | center | right' },
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
    tSize: {
      description: 'font-size - accepts theme sizes key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1 | 16px' },
      },
    },
    tTransform: {
      description: 'text-transform - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'capitalize | uppercase | lowercase' },
      },
    },
    weight: {
      description: 'text-weight - accepts theme weight key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bold | regular | 600' },
      },
    },
  },
} as Meta
