import React from 'react'
import { Meta } from '@storybook/react'

import theme from '..'
import { visuallyGenerateTheme } from './helpers'

export const Colors: React.VFC = () => <>{visuallyGenerateTheme(theme.colors, 'colors')}</>

export default {
  title: 'Theme/Colors',
} as Meta
