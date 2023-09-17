/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import styled, { Theme } from 'styled-components'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'
import components, { generateComponentCss } from '../components'

const testTheme = {
  ...theme,
  components: {
    jest: {
      color: 'red',
      fontSize: '14px',
      modes: {
        small: {
          fontSize: '12px',
        },
      },
      md: {
        paddingLeft: '45px',
      },
      sm: {
        backgroundColor: 'red',
        color: 'blue',
      },
    },
    withoutResponsive: {
      fontWeight: 'regular',
    },
  },
}

const WithComponentsInjector = styled.div.attrs({ componentName: 'jest' })`
  ${components}
`

const TestComponent = () => {
  return (
    <TestWrapper customTheme={testTheme as any}>
      <WithComponentsInjector>Test Jest</WithComponentsInjector>
    </TestWrapper>
  )
}

const TestComponentWithMode = () => {
  return (
    <TestWrapper customTheme={testTheme as any}>
      <WithComponentsInjector mode="small">Test Jest</WithComponentsInjector>
    </TestWrapper>
  )
}

const TestComponentWithIncorrectMode = () => {
  return (
    <TestWrapper customTheme={testTheme as any}>
      <WithComponentsInjector mode="notamode">Test Jest</WithComponentsInjector>
    </TestWrapper>
  )
}

describe('components', () => {
  it('renders correctly', () => {
    render(<TestComponent />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('contains the global component CSS rules', () => {
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toHaveStyleRule('color', 'red')
    expect(container.firstChild).toHaveStyleRule('font-size', '14px')
  })

  it('generates media queries correctly', () => {
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toHaveStyleRule('background-color', 'red', {
      media: `only screen and (max-width: ${theme.breakpoints.sm.maxWidth}px)`,
    })
    expect(container.firstChild).toHaveStyleRule('color', 'blue', {
      media: `only screen and (max-width: ${theme.breakpoints.sm.maxWidth}px)`,
    })
    expect(container.firstChild).toHaveStyleRule('padding-left', '45px', {
      media: `only screen and (max-width: ${theme.breakpoints.md.maxWidth}px)`,
    })
  })

  it('does not generate media queries if they are not needed', () => {
    const css = generateComponentCss({
      componentName: 'withoutResponsive' as keyof Theme['components'],
      mode: 'small',
      theme: testTheme as any,
    })
    expect(css).not.toMatch(
      `@media only screen and (max-width: ${theme.breakpoints.sm.maxWidth}px)`,
    )
    expect(css).not.toMatch(
      `@media only screen and (max-width: ${theme.breakpoints.md.maxWidth}px)`,
    )
  })

  it('generates component mode CSS correctly if the prop is defined and fits an existing key', () => {
    const { container } = render(<TestComponentWithMode />)
    expect(container.firstChild).toHaveStyleRule('font-size', '12px')
  })

  it('does not contain component mode CSS if the mode prop is undefined', () => {
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toHaveStyleRule('font-size', '14px')
    expect(container.firstChild).not.toHaveStyleRule('font-size', '12px')
  })

  it('does not contain component mode CSS if the mode prop is defined but does not fit an existing key', () => {
    const { container } = render(<TestComponentWithIncorrectMode />)
    expect(container.firstChild).toHaveStyleRule('font-size', '14px')
    expect(container.firstChild).not.toHaveStyleRule('font-size', '12px')
  })

  it('ensures that component mode CSS is generated after the component global CSS so it can override it', () => {
    const css = generateComponentCss({
      componentName: 'jest' as keyof Theme['components'],
      mode: 'small',
      theme: testTheme as any,
    })
    expect(css).toMatch(`font-size: 14px;\nfont-size: 12px;`)
  })
})
