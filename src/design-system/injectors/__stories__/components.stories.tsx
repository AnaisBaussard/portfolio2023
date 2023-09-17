/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Meta } from '@storybook/react'

import theme from 'config/theme'
import { visuallyGenerateTheme } from 'config/theme/__stories__/helpers'

import components from '../components'

const storyTheme = {
  ...theme,
  components: {
    ...theme.components,
    story: {
      color: 'green',
      fontSize: '16px',
      md: {
        color: 'orange',
      },
      sm: {
        color: 'black',
        backgroundColor: 'lightGrey',
      },
      modes: {
        small: {
          fontSize: '14px',
          md: {
            fontSize: '12px',
          },
        },
      },
    },
  },
}

const ComponentInjector = styled.div.attrs({ componentName: 'story' })`
  ${components}
`

export const Components: React.VFC = ({ mode }: { mode?: 'normal' | 'small' }) => (
  <ThemeProvider theme={storyTheme as any}>
    <ComponentInjector mode={mode}>
      {`This component's css has been generated from the following theme values. Try changing the
      viewport!`}
    </ComponentInjector>
    {visuallyGenerateTheme({ story: storyTheme.components.story })}
  </ThemeProvider>
)

export default {
  component: ComponentInjector,
  title: 'Injectors/Components',
  parameters: {
    docs: {
      description: {
        component: `Inject this style into your component so that component CSS can be generated out of the theme.\n\nExample: "backgroundColor: colors.darkGrey" from the theme will be translated to "background-color: #363C50;" in the CSS.\n\nAlso supports responsive or modes (see the theme for examples).\n\nDon't forget to include the props "componentName" and "mode" in a component that uses this injector.`,
      },
    },
  },
  args: {
    mode: 'normal',
  },
  argTypes: {
    mode: {
      control: { type: 'radio' },
      description: "mode - accepts any key that fits a component's 'modes' object in the theme",
      options: ['normal', 'small'],
      table: {
        defaultValue: { summary: 'normal | small' },
        type: { summary: 'string' },
      },
    },
  },
} as Meta
