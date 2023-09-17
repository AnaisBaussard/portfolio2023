/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import styled from 'styled-components'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'
import text from '../text'

const testTheme = {
  ...theme,
  colors: {
    primary: '#FFFFFF',
  },
  weights: {
    medium: 500,
  },
}

const WithTextInjector = styled.div`
  ${text}
`

const TestTextWithThemeValues = () => {
  return (
    <TestWrapper customTheme={testTheme as any}>
      <WithTextInjector italic tAlign={undefined} tColor="primary" weight="medium">
        Test Jest
      </WithTextInjector>
    </TestWrapper>
  )
}

const TestTextWithCustomValues = () => {
  return (
    <TestWrapper>
      <WithTextInjector tColor="#704B37">Test Jest</WithTextInjector>
    </TestWrapper>
  )
}

describe('text', () => {
  it('renders correctly', () => {
    render(<TestTextWithThemeValues />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('contains all CSS rules from theme', () => {
    const { container } = render(<TestTextWithThemeValues />)
    expect(container.firstChild).toHaveStyleRule('color', '#FFFFFF')
    expect(container.firstChild).toHaveStyleRule('font-style', 'italic')
    expect(container.firstChild).toHaveStyleRule('font-weight', '500')
  })

  it('contains all custom CSS rules', () => {
    const { container } = render(<TestTextWithCustomValues />)
    expect(container.firstChild).toHaveStyleRule('color', '#704B37')
  })

  it('does not contain the empty text-align CSS rule', () => {
    const { container } = render(<TestTextWithThemeValues />)
    expect(container.firstChild).not.toHaveStyleRule('text-align', expect.any(String))
  })
})
