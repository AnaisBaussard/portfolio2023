import { render, screen } from '@testing-library/react'

import { TestWrapper } from 'tests/utils'
import Div from '..'

const TestDiv = () => {
  return (
    <TestWrapper>
      <Div bgC="" di="f" fd="column" mb={0.75} mr={undefined} w="100%" weight="bold">
        Test Jest
      </Div>
    </TestWrapper>
  )
}

describe('Div component', () => {
  it('renders correctly', () => {
    render(<TestDiv />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('contains injector CSS rules', () => {
    const { container } = render(<TestDiv />)
    expect(container.firstChild).toHaveStyleRule('font-weight', '700')
    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column')
    expect(container.firstChild).toHaveStyleRule('width', '100%')
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0.75rem')
  })

  it('does not contain empty injector CSS rule props', () => {
    const { container } = render(<TestDiv />)
    expect(container.firstChild).not.toHaveStyleRule('background-color')
    expect(container.firstChild).not.toHaveStyleRule('margin-right')
  })
})
