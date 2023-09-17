/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import styled from 'styled-components'

import { TestWrapper } from 'tests/utils'
import sizes from '../sizes'

const WithSizesInjector = styled.div`
  ${sizes}
`

const TestSizes = () => {
  return (
    <TestWrapper>
      <WithSizesInjector mb={1.5} ml="" mr="auto" pb="0" pl="600px" pt={0}>
        Test Jest
      </WithSizesInjector>
    </TestWrapper>
  )
}

describe('sizes', () => {
  it('renders correctly', () => {
    render(<TestSizes />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('contains all CSS rules from theme or custom', () => {
    const { container } = render(<TestSizes />)
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '1.5rem')
    expect(container.firstChild).toHaveStyleRule('padding-top', '0rem')
  })

  it('contains all custom CSS rules', () => {
    const { container } = render(<TestSizes />)
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto')
    expect(container.firstChild).toHaveStyleRule('padding-left', '600px')
    expect(container.firstChild).toHaveStyleRule('padding-bottom', '0rem')
  })

  it('does not contain the empty margin-left CSS rule', () => {
    const { container } = render(<TestSizes />)
    expect(container.firstChild).not.toHaveStyleRule('margin-left', expect.any(String))
  })
})
