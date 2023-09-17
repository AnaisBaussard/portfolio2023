import React from 'react'
import { css, FlattenSimpleInterpolation, Theme } from 'styled-components'
import { map } from 'lodash'

import { svgDirections } from 'config/css'
import { testIds } from 'tests/config'

export const generateCssGradient = (gradient: Gradient, deg = 90) =>
  `linear-gradient(${deg}deg,${map(
    gradient,
    ([color, percentage]) => `${color} ${percentage}%`,
  ).join(`,`)});`

export const generateSvgGradient = (
  name: string,
  gradient: Gradient,
  direction: keyof typeof svgDirections['y1'] = 'v',
) => (
  <defs>
    <linearGradient
      data-testid={testIds.componentsIconGradient}
      id={`${name}-gradient`}
      x1={svgDirections.x1[direction]}
      x2={svgDirections.x2[direction]}
      y1={svgDirections.y1[direction]}
      y2={svgDirections.y2[direction]}
    >
      {map(gradient, ([color, percentage], index) => (
        <stop
          key={`${color}-${percentage}-${index}`}
          offset={percentage}
          stopColor={color as string}
        />
      ))}
    </linearGradient>
  </defs>
)

export const generateMediaQuery = (
  {
    screenSize,
    theme,
  }: {
    screenSize: ScreenSize
    theme: Theme
  },
  content: string | FlattenSimpleInterpolation,
): string =>
  css`
    @media only screen and (max-width: ${theme.breakpoints[screenSize].maxWidth}px) {
      ${content}
    }
  `.join('')

export const hexToRgba = (hex: string, alpha = 1) => {
  if (alpha < 0 || alpha > 1 || isNaN(alpha))
    throw new Error('Alpha value should be between 0 and 1')
  if (hex && hex.length > 5 && /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    const matchedHex = hex.match(/\w\w/g)
    if (matchedHex) {
      const [r, g, b] = matchedHex.map(x => parseInt(x, 16))
      return `rgba(${r},${g},${b},${alpha})`
    }
  }
  throw new Error('Bad hex')
}
