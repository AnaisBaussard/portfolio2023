import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'

import { visuallyGenerateTheme } from 'config/theme/__stories__/helpers'
import display, { DisplayProps, resolvedMap } from '../display'

const DisplayInjector = styled.div`
  ${display}
`

export const Display: React.VFC = ({
  ac,
  ai,
  als,
  di,
  fb,
  fd,
  fg,
  fs,
  fw,
  jc,
  js,
  or,
}: DisplayProps) => (
  <DisplayInjector
    ac={ac}
    ai={ai}
    als={als}
    di={di}
    fb={fb}
    fd={fd}
    fg={fg}
    fs={fs}
    fw={fw}
    jc={jc}
    js={js}
    or={or}
  >
    <div>
      ------ 1 ------
      <br />1
    </div>
    <div>------ 2 ------</div>
    <div>------ 3 ------</div>
  </DisplayInjector>
)

export const Values: React.VFC = () => <>{visuallyGenerateTheme(resolvedMap)}</>

export default {
  component: DisplayInjector,
  title: 'Injectors/Display',
  parameters: {
    docs: {
      description: {
        component:
          'Inject this style into your component so it can support display props from the theme or custom values.',
      },
    },
  },
  args: {
    ac: '',
    ai: 'e',
    als: '',
    di: 'f',
    fb: '',
    fd: '',
    fg: '',
    fs: '',
    fw: '',
    jc: 'sb',
    js: '',
    or: '',
  },
  argTypes: {
    ac: {
      description: 'align-content - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ce | center | s | start' },
      },
    },
    ai: {
      description: 'align-items - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ce | center | s | start' },
      },
    },
    als: {
      description: 'align-self - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ce | center | s | start' },
      },
    },
    di: {
      description: 'display - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'b | block | f | flex' },
      },
    },
    fb: {
      description: 'flex-basis - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto | max-content | 200px' },
      },
    },
    fd: {
      description: 'flex-direction - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'c | column | rr | row-reverse' },
      },
    },
    fg: {
      description: 'flex-grow - accepts number or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '2 | inherit' },
      },
    },
    fs: {
      description: 'flex-shrink - accepts number or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '2 | inherit' },
      },
    },
    fw: {
      description: 'flex-wrap - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'nw | nowrap | w | wrap' },
      },
    },
    jc: {
      description: 'justify-content - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sb | space-between | fs | flex-end' },
      },
    },
    js: {
      description: 'justify-self - accepts map key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ce | center | s | start' },
      },
    },
    or: {
      description: 'order - accepts number or string',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '2 | inherit' },
      },
    },
  },
} as Meta
