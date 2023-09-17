import { render, screen } from '@testing-library/react'
import styled from 'styled-components'

import { TestWrapper } from 'tests/utils'
import container from '../container'

const WithContainerInjector = styled.div`
  ${container}
`

const TestContainer = () => {
  return (
    <TestWrapper>
      <WithContainerInjector bgC="indianred" h={1} w={0} minH="" minW="400px">
        Test Jest
      </WithContainerInjector>
    </TestWrapper>
  )
}

describe('container', () => {
  it('renders correctly', () => {
    render(<TestContainer />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('contains background-color: red CSS rule', () => {
    const { container } = render(<TestContainer />)
    expect(container.firstChild).toHaveStyleRule('background-color', 'indianred')
  })

  it('contains height: 1rem and width: 0rem CSS rules from theme', () => {
    const { container } = render(<TestContainer />)
    expect(container.firstChild).toHaveStyleRule('height', '1rem')
    expect(container.firstChild).toHaveStyleRule('width', '0rem')
  })

  it('does not contain the empty min-height CSS rule', () => {
    const { container } = render(<TestContainer />)
    expect(container.firstChild).not.toHaveStyleRule('min-height', expect.any(String))
  })

  it('contains min-width: 400px custom CSS rule', () => {
    const { container } = render(<TestContainer />)
    expect(container.firstChild).toHaveStyleRule('min-width', '400px')
  })
})
