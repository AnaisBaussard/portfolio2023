import { render, screen } from '@testing-library/react'
import styled from 'styled-components'

import { TestWrapper } from 'tests/utils'
import display from '../display'

const WithDisplayInjector = styled.div`
  ${display}
`

const TestDisplay = () => {
  return (
    <TestWrapper>
      <WithDisplayInjector ai="ce" als="stretch" di="f" fd="" jc="center" or={2}>
        Test Jest
      </WithDisplayInjector>
    </TestWrapper>
  )
}

describe('display', () => {
  it('renders correctly', () => {
    render(<TestDisplay />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('contains display: flex and align-items: center CSS rules from resolved map', () => {
    const { container } = render(<TestDisplay />)
    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('align-items', 'center')
  })

  it('contains align-self: stretch, justify-content: center and order: 2 custom CSS rules', () => {
    const { container } = render(<TestDisplay />)
    expect(container.firstChild).toHaveStyleRule('align-self', 'stretch')
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center')
    expect(container.firstChild).toHaveStyleRule('order', '2')
  })

  it('does not contain the undefined flex-direction CSS rule', () => {
    const { container } = render(<TestDisplay />)
    expect(container.firstChild).not.toHaveStyleRule('flex-direction', expect.any(String))
  })
})
