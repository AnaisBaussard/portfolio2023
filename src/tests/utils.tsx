import { ThemeProvider, Theme } from 'styled-components'
import theme from 'config/theme'

type TestWrapperProps = {
  children: React.ReactNode
  customTheme?: Theme
}

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () =>
          new Promise(() => {
            return {}
          }),
      },
    }
  },
}))

const TestWrapper = ({ children, customTheme }: TestWrapperProps) => {
  return <ThemeProvider theme={customTheme || theme}>{children}</ThemeProvider>
}

export { TestWrapper }
