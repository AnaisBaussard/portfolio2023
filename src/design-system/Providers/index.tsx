import React from 'react'
import { Theme, ThemeProvider } from 'styled-components'

import theme from 'config/theme'
import ResponsiveProvider from 'context/Responsive'

import { BaseCSS } from './styles'

export const StyleProvider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: Theme
}) => (
  <ThemeProvider theme={customTheme || theme}>
    <BaseCSS />
    {children}
  </ThemeProvider>
)

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyleProvider>
      <ResponsiveProvider>{children}</ResponsiveProvider>
    </StyleProvider>
  )
}

export default Providers
