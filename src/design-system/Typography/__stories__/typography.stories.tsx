import React from 'react'
import { Meta } from '@storybook/react'

import Emphasis from '../Emphasis'
import MenuText from '../MenuText'
import SubTitle from '../SubTitle'
import Text from '../Text'
import Title from '../Title'
import ResponsiveTextContainer from '../ResponsiveTextContainer'

export const Typography: React.VFC = ({ mode }: { mode?: 'small' }) => (
  <>
    <Title mb={1} mode={mode}>
      {mode === 'small' && 'Small '}Title {mode === 'small' ? '(h2)' : '(h1)'}
    </Title>
    <Title mb={1} mode={mode} withSeparator>
      {mode === 'small' && 'Small '}Title with separator
    </Title>
    <SubTitle mb={1}>SubTitle (h3)</SubTitle>
    <Text mb={1}>Text (p)</Text>
    <Text mb={1}>
      Text with <Emphasis tColor="primary">emphasis (span)</Emphasis> in it.
    </Text>
    <MenuText mb={1}>MenuText</MenuText>
    <ResponsiveTextContainer>
      Responsive text container (try changing the viewport!)
    </ResponsiveTextContainer>
  </>
)

export default {
  component: Title,
  title: 'Components/Typography',
  parameters: {
    docs: {
      description: {
        component: `Components to be used for any text purposes. All of them contain the following injectors:\n\n* Container\n* Display\n* Sizes\n* Text`,
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
        defaultValue: { summary: 'small' },
        type: { summary: 'string' },
      },
    },
  },
} as Meta
