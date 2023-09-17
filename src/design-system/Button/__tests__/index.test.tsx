import { fireEvent, render, screen } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'

import Button from '..'

describe('Button component', () => {
  const handleOnClick = jest.fn()

  const TestButton = () => (
    <TestWrapper>
      <Button color="#ED5456" mb={3} onClick={handleOnClick} w="400px">
        Test Jest
      </Button>
    </TestWrapper>
  )
  const TestLoadingButton = () => (
    <TestWrapper>
      <Button isLoading>Test Jest</Button>
    </TestWrapper>
  )
  const TestDisabledButton = () => (
    <TestWrapper>
      <Button disabled>Test Jest</Button>
    </TestWrapper>
  )

  it('renders correctly', () => {
    render(<TestButton />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('renders as a button node', () => {
    const { container } = render(<TestButton />)
    expect(container?.firstChild?.nodeName).toBe('BUTTON')
  })

  it('calls onClick function when clicking on the button', () => {
    const { container } = render(<TestButton />)
    expect(container?.firstChild).toBeEnabled()
    fireEvent.click(container?.firstChild as HTMLElement)
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })

  it('contains Button CSS rules (from Text component injector)', () => {
    const { container } = render(<TestButton />)
    expect(container.firstChild).toHaveStyleRule('font-family', theme.components.button.fontFamily)
    expect(container.firstChild).toHaveStyleRule('font-size', theme.components.text.fontSize)
  })

  it('contains Button CSS rules', () => {
    const { container } = render(<TestButton />)
    expect(container.firstChild).toHaveStyleRule(
      'border-radius',
      theme.components.button.borderRadius,
    )
    expect(container.firstChild).toHaveStyleRule('color', theme.components.button.color)
    expect(container.firstChild).toHaveStyleRule('cursor', theme.components.button.cursor)
    expect(container.firstChild).toHaveStyleRule('font-weight', theme.components.button.fontWeight)
  })

  it('contains Button CSS from props', () => {
    const { container } = render(<TestButton />)
    expect(container.firstChild).toHaveStyleRule('background-color', '#ED5456')
    expect(container.firstChild).toHaveStyleRule(
      'background',
      'linear-gradient(180deg,#ED5456 0%,rgba(237,84,86,0.5) 100%)',
    )
    expect(container.firstChild).toHaveStyleRule('margin-bottom', theme.sizes[3])
    expect(container.firstChild).toHaveStyleRule('width', '400px')
  })

  it('contains Button hover and active CSS', () => {
    const { container } = render(<TestButton />)
    expect(container.firstChild).toHaveStyleRule('background-color', '#ED5456', {
      modifier: ':hover',
    })
    expect(container.firstChild).toHaveStyleRule('background-color', 'rgba(237,84,86,0.7)', {
      modifier: ':active',
    })
    expect(container.firstChild).toHaveStyleRule('background', 'none', {
      modifier: ':active',
    })
  })

  it('changes cursor and disables button when loading', () => {
    const { container } = render(<TestLoadingButton />)
    expect(container.firstChild).toHaveAttribute('disabled')
    expect(container.firstChild).toHaveStyleRule('cursor', theme.components.button.disabled.cursor)
  })

  it('checks that button is disabled in the DOM when prop disabled is true', () => {
    const { container } = render(<TestDisabledButton />)
    expect(container.firstChild).toBeDisabled()
  })

  it('changes cursor, opacity and disables button when disabled', () => {
    const { container } = render(<TestDisabledButton />)
    expect(container.firstChild).toHaveAttribute('disabled')
    expect(container.firstChild).toHaveStyleRule('cursor', theme.components.button.disabled.cursor)
    expect(container.firstChild).toHaveStyleRule(
      'opacity',
      theme.components.button.disabled.opacity,
    )
  })
})
