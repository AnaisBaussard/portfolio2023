import { render, screen } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'

import Separator from '..'

const TestSeparator = () => {
  return (
    <TestWrapper>
      <Separator />
    </TestWrapper>
  )
}

const TestVerticalSeparator = () => {
  return (
    <TestWrapper>
      <Separator isVertical />
    </TestWrapper>
  )
}

describe('Separator component', () => {
  ;[
    {
      Component: TestSeparator,
      isVertical: false,
    },
    {
      Component: TestVerticalSeparator,
      isVertical: true,
    },
  ].forEach(({ Component, isVertical }) => {
    describe(`${isVertical ? 'Vertical' : 'Horizontal'} separator component`, () => {
      it('renders correctly', () => {
        render(<Component />)
        expect(screen.queryByTestId('separator')).toBeInTheDocument()
      })

      it('renders as a hr node', () => {
        const { container } = render(<Component />)
        expect(container?.firstChild?.nodeName).toBe('HR')
      })

      it('has style from component and theme', () => {
        const { container } = render(<Component />)
        expect(container.firstChild).toHaveStyleRule(
          'background-color',
          theme.components.separator.backgroundColor,
        )
        expect(container.firstChild).toHaveStyleRule('position', 'relative')
        expect(container.firstChild).toHaveStyleRule(
          'background-color',
          theme.components.separator.after.backgroundColor,
          {
            modifier: '::after',
          },
        )
        expect(container.firstChild).toHaveStyleRule('position', `absolute`, {
          modifier: '::after',
        })
      })

      it('has correct width and height style depending on variant', () => {
        const { container } = render(<Component />)
        expect(container.firstChild).toHaveStyleRule(isVertical ? 'width' : 'height', '1px')
        expect(container.firstChild).toHaveStyleRule(
          isVertical ? 'height' : 'width',
          theme.components.separator.size,
        )
        expect(container.firstChild).toHaveStyleRule(isVertical ? 'width' : 'height', '1px', {
          modifier: '::after',
        })
        expect(container.firstChild).toHaveStyleRule(
          isVertical ? 'height' : 'width',
          theme.components.separator.after.size,
          {
            modifier: '::after',
          },
        )
      })
    })
  })
})
