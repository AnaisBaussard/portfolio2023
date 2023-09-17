import { render } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'

import Layout, { LayoutProps } from '../'

const TestLayout = (props: LayoutProps) => (
  <TestWrapper>
    <Layout {...props} />
  </TestWrapper>
)

describe('Layout', () => {
  ;[
    {
      bottomMargin: true,
      topMargin: true,
    },
    {
      bottomMargin: false,
      topMargin: false,
    },
    {
      bottomMargin: true,
      topMargin: false,
    },
    {
      bottomMargin: false,
      topMargin: true,
    },
  ].forEach((props: LayoutProps) => {
    const setup = () => {
      const utils = render(<TestLayout {...props} />)
      const layout = () => utils.container.firstChild
      return {
        layout,
        ...utils,
      }
    }

    it('renders correctly', () => {
      const { layout } = setup()
      expect(layout()).toBeInTheDocument()
    })

    it('renders as a div node', () => {
      const { layout } = setup()
      expect(layout()?.nodeName).toBe('DIV')
    })

    it('has the correct CSS rules from theme', () => {
      const { layout } = setup()
      expect(layout()).toHaveStyleRule('max-width', theme.components.layout.maxWidth)
      expect(layout()).toHaveStyleRule('padding', theme.components.layout.padding)
    })

    it(`${props.bottomMargin ? 'has' : 'does not have'} margin-bottom`, () => {
      const { layout } = setup()
      if (props.bottomMargin) {
        expect(layout()).toHaveStyleRule('margin-bottom', theme.components.layout.margin)
      } else {
        expect(layout()).not.toHaveStyleRule('margin-bottom')
      }
    })

    it(`${props.topMargin ? 'has' : 'does not have'} margin-top`, () => {
      const { layout } = setup()
      if (props.topMargin) {
        expect(layout()).toHaveStyleRule('margin-top', theme.components.layout.margin)
      } else {
        expect(layout()).not.toHaveStyleRule('margin-top')
      }
    })
  })
})
