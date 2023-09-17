import { render, screen } from '@testing-library/react'
import { map } from 'lodash'

import theme from 'config/theme'
import { testIds } from 'tests/config'
import { TestWrapper } from 'tests/utils'
import * as icons from '..'

describe('Icon component', () => {
  map(icons, Icon => {
    const TestIcon = () => (
      <TestWrapper>
        <Icon data-testid="icon" />
      </TestWrapper>
    )

    const TestIconWithStyleProps = () => (
      <TestWrapper>
        <Icon color="#FFFFFF" data-testid="icon" h={3} w="35px" />
      </TestWrapper>
    )

    const TestIconWithGradient = () => (
      <TestWrapper>
        <Icon data-testid="icon" gradient="regateSvg" />
      </TestWrapper>
    )

    it('renders correctly', () => {
      render(<TestIcon />)
      expect(screen.queryByTestId('icon')).toBeInTheDocument()
    })

    it('renders either as a svg or a i node', () => {
      const { container } = render(<TestIcon />)
      expect(['svg', 'I']).toContain(container?.firstChild?.nodeName)
    })

    it('contains base CSS from theme', () => {
      const { container } = render(<TestIcon />)
      expect(container.firstChild).toHaveStyleRule('fill', theme.components.icon.fill)
      expect(container.firstChild).toHaveStyleRule('height', theme.components.icon.height)
      expect(container.firstChild).toHaveStyleRule('width', theme.components.icon.width)
    })

    it('contains custom CSS from props', () => {
      const { container } = render(<TestIconWithStyleProps />)
      expect(container.firstChild).toHaveStyleRule('fill', '#FFFFFF')
      expect(container.firstChild).toHaveStyleRule('height', '3rem')
      expect(container.firstChild).toHaveStyleRule('width', '35px')
    })

    it('contains gradient definition nodes if node is svg and if the gradient is defined with a correct value', () => {
      const { container } = render(<TestIconWithGradient />)
      if (container?.firstChild?.nodeName === 'SVG') {
        expect(screen.queryByTestId(testIds.componentsIconGradient)).toBeInTheDocument()
      }
    })

    it('does not contain gradient definition nodes if node is svg and if the gradient is undefined', () => {
      const { container } = render(<TestIcon />)
      if (container?.firstChild?.nodeName === 'SVG') {
        expect(screen.queryByTestId(testIds.componentsIconGradient)).not.toBeInTheDocument()
      }
    })
  })
})
