import { css, FlattenSimpleInterpolation, Theme } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { map } from 'lodash'

import { DirectionKey, svgDirections } from 'config/css'
import theme from 'config/theme'
import { testIds } from 'tests/config'
import { TestWrapper } from 'tests/utils'
import { generateCssGradient, generateMediaQuery, generateSvgGradient, hexToRgba } from '../css'

const gradientTestCases: { gradient: Gradient; direction: DirectionKey }[] = [
  {
    direction: 'v',
    gradient: [
      ['#FFF', '0'],
      ['#000', '100'],
    ],
  },
  {
    direction: 'vr',
    gradient: [
      ['#FFF', '0'],
      ['#BABABA', '50'],
      ['#000', '100'],
    ],
  },
  {
    direction: 'h',
    gradient: [
      ['#FFF', '0'],
      ['#BABABA', '25'],
      ['primary', '75'],
      ['#000', '100'],
    ],
  },
  {
    direction: 'hr',
    gradient: [
      ['red', '0'],
      ['blue', '25'],
    ],
  },
]

describe('generateCssGradient', () => {
  it('correctly sets deg default value at 90', () => {
    const value = generateCssGradient(gradientTestCases[0].gradient)
    expect(value).toBe('linear-gradient(90deg,#FFF 0%,#000 100%);')
  })

  it('generates linear gradient CSS rule correctly', () => {
    const value = generateCssGradient(gradientTestCases[0].gradient, 45)
    expect(value).toBe('linear-gradient(45deg,#FFF 0%,#000 100%);')
  })

  it('generates linear gradient CSS rule correctly for 3 steps', () => {
    const value = generateCssGradient(gradientTestCases[1].gradient)
    expect(value).toBe('linear-gradient(90deg,#FFF 0%,#BABABA 50%,#000 100%);')
  })
})

describe('generateSvgGradient', () => {
  map(gradientTestCases, data => {
    const TestSvgGradient = () => {
      return (
        <TestWrapper>
          <svg>{generateSvgGradient('testSvg', data.gradient, data.direction)}</svg>
        </TestWrapper>
      )
    }

    it('renders correctly and contains gradient definition nodes', () => {
      render(<TestSvgGradient />)
      expect(screen.queryByTestId(testIds.componentsIconGradient)).toBeInTheDocument()
    })

    it('correctly sets the direction', () => {
      render(<TestSvgGradient />)
      const node = screen.queryByTestId(testIds.componentsIconGradient)
      expect(node).toHaveAttribute('x1', svgDirections.x1[data.direction])
      expect(node).toHaveAttribute('x2', svgDirections.x2[data.direction])
      expect(node).toHaveAttribute('y1', svgDirections.y1[data.direction])
      expect(node).toHaveAttribute('y2', svgDirections.y2[data.direction])
    })

    it('correctly sets gradient nodes', () => {
      render(<TestSvgGradient />)
      const node = screen.queryByTestId(testIds.componentsIconGradient)
      map(node?.children, (child, index) => {
        expect(child).toHaveAttribute('offset', data.gradient[index][1])
        expect(child).toHaveAttribute('stop-color', data.gradient[index][0])
      })
    })
  })
})

const mediaQueryTestCases: {
  content: string | FlattenSimpleInterpolation
  expectedContent?: string
  screenSize: ScreenSize
  theme: Theme
}[] = [
  { screenSize: 'sm', theme, content: 'color: red;' },
  {
    screenSize: 'sm',
    theme,
    content: css`
      color: blue;
      background-color: orange;
      ${true && `display: block;`}
      ${false && `width: 500px;`}
    `,
    expectedContent: css`
      color: blue;
      background-color: orange;
      ${true && `display: block;`}
      ${false && `width: 500px;`}
    `.join(''),
  },
  { screenSize: 'md', theme, content: 'color: red; background-color: blue;' },
  {
    screenSize: 'md',
    theme,
    content: `
      color: red;
      background-color: blue;
      ${true && `display: block;`}
      ${false && `width: 500px;`}
    `,
  },
]

describe('generateMediaQuery', () => {
  map(mediaQueryTestCases, ({ content, expectedContent, screenSize, theme }) => {
    it('correctly generates media queries', () => {
      const value = generateMediaQuery({ screenSize, theme }, content)
      expect(value).toBe(
        `@media only screen and (max-width:${theme.breakpoints[screenSize].maxWidth}px){${
          expectedContent || content
        }}`,
      )
    })
  })
})

const hexToRgbaTestCases: { alpha: number; hex: string; expectedRgba: string }[] = [
  {
    alpha: 1,
    hex: '#4808ff',
    expectedRgba: 'rgba(72,8,255,1)',
  },
  {
    alpha: 0.5,
    hex: '#25a7be',
    expectedRgba: 'rgba(37,167,190,0.5)',
  },
  {
    alpha: 0,
    hex: '#74878a',
    expectedRgba: 'rgba(116,135,138,0)',
  },
  {
    alpha: 1,
    hex: '#FFFFFF',
    expectedRgba: 'rgba(255,255,255,1)',
  },
  {
    alpha: 0.7,
    hex: '#000000',
    expectedRgba: 'rgba(0,0,0,0.7)',
  },
]

describe('hexToRgba', () => {
  map(hexToRgbaTestCases, ({ alpha, hex, expectedRgba }) => {
    it('returns the expected rgba value', () => {
      const value = hexToRgba(hex, alpha)
      expect(value).toBe(expectedRgba)
    })
  })

  it('throws error if hex value is incorrect', () => {
    expect(() => hexToRgba('incorrectHex', 1)).toThrow('Bad hex')
    expect(() => hexToRgba('74878a', 1)).toThrow('Bad hex')
    expect(() => hexToRgba('#000', 1)).toThrow('Bad hex')
  })

  it("throws error if alpha value isn't between 0 and 1", () => {
    expect(() => hexToRgba('#000000', 50)).toThrow('Alpha value should be between 0 and 1')
    expect(() => hexToRgba('#000000', -200)).toThrow('Alpha value should be between 0 and 1')
    expect(() => hexToRgba('#000000', 2)).toThrow('Alpha value should be between 0 and 1')
    expect(() => hexToRgba('#000000', -1)).toThrow('Alpha value should be between 0 and 1')
    expect(() => hexToRgba('#000000', NaN)).toThrow('Alpha value should be between 0 and 1')
  })
})
