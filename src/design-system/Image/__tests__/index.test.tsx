import { render } from '@testing-library/react'

import { TestWrapper } from 'tests/utils'

import Image from '../'

const TestImage = () => (
  <TestWrapper>
    <Image src="/images/portfolio/regate/logo.png" />
  </TestWrapper>
)

describe('Image', () => {
  const setup = () => {
    const utils = render(<TestImage />)
    const image = () => utils.container.firstChild
    return {
      image,
      ...utils,
    }
  }

  it('renders correctly', () => {
    const { image } = setup()
    expect(image()).toBeInTheDocument()
  })

  it('renders as an img node', () => {
    const { image } = setup()
    expect(image()?.nodeName).toBe('IMG')
  })

  it('always has an alt prop, even if empty', () => {
    const { image } = setup()
    expect(image()).toHaveAttribute('alt')
  })
})
