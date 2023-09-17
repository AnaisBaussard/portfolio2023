import { render, screen } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'
import Link from '..'

const TestLink = () => {
  return (
    <TestWrapper>
      <Link href="/test" mb={0.75} weight="700">
        Test Jest
      </Link>
    </TestWrapper>
  )
}

const TestInheritedLink = () => {
  return (
    <TestWrapper>
      <Link href="/test" isInherited>
        Test Jest
      </Link>
    </TestWrapper>
  )
}

const TestLinkWithoutUnderline = () => {
  return (
    <TestWrapper>
      <Link href="/test" isUnderlined={false}>
        Test Jest
      </Link>
    </TestWrapper>
  )
}

describe('Tile component', () => {
  it('renders correctly', () => {
    render(<TestLink />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('renders as an <a> node', () => {
    const { container } = render(<TestLink />)
    expect(container?.firstChild?.nodeName).toBe('A')
  })

  it('contains theme CSS rules', () => {
    const { container } = render(<TestLink />)
    expect(container.firstChild).toHaveStyleRule('color', theme.components.link.color)
    expect(container.firstChild).toHaveStyleRule('color', theme.components.link.hover.color, {
      modifier: ':hover',
    })
    expect(container.firstChild).toHaveStyleRule(
      'text-decoration',
      theme.components.link.textDecoration,
    )
  })

  it('gives correct CSS rules if isInherited is true', () => {
    const { container } = render(<TestInheritedLink />)
    expect(container.firstChild).toHaveStyleRule('font-family', 'inherit')
    expect(container.firstChild).toHaveStyleRule('font-size', 'inherit')
    expect(container.firstChild).toHaveStyleRule('font-weight', 'inherit')
    expect(container.firstChild).toHaveStyleRule('line-height', 'inherit')
  })

  it('has no underline is isUnderlined is set to false', () => {
    const { container } = render(<TestLinkWithoutUnderline />)
    expect(container.firstChild).toHaveStyleRule('text-decoration', 'none')
  })

  it('contains injector CSS rules', () => {
    const { container } = render(<TestLink />)
    expect(container.firstChild).toHaveStyleRule('font-weight', '700')
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0.75rem')
  })
})
