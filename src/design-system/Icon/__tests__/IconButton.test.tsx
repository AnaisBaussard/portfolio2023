import { fireEvent, render, screen } from '@testing-library/react'

import { TestWrapper } from 'tests/utils'

import ButtonBase from '../../ButtonBase'
import { Bars } from '../'

describe('IconButton', () => {
  const handleOnClick = jest.fn()

  const TestIconButton = () => {
    return (
      <TestWrapper>
        <ButtonBase onClick={handleOnClick}>
          <Bars data-testid="icon" />
        </ButtonBase>
      </TestWrapper>
    )
  }

  const setup = (Component: () => JSX.Element) => {
    const utils = render(<Component />)
    const button = () => utils?.container?.firstChild as HTMLElement
    const icon = () => screen.queryByTestId('icon') as HTMLElement
    return {
      button,
      icon,
      ...utils,
    }
  }

  it('renders correctly', () => {
    const { icon } = setup(TestIconButton)
    expect(icon()).toBeInTheDocument()
  })

  it('calls onClick function when clicking on the icon', () => {
    const { button, icon } = setup(TestIconButton)
    expect(button()).toBeEnabled()
    fireEvent.click(icon())
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})
