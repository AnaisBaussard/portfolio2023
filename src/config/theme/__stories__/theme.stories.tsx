import React from 'react'
import { Meta } from '@storybook/react'

import theme from '..'
import { visuallyGenerateTheme } from './helpers'

export const Theme: React.VFC = () => <>{visuallyGenerateTheme(theme)}</>

export default {
  title: 'Theme/Theme',
} as Meta
