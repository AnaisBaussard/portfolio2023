import React from 'react'
import { render, screen } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'

import Emphasis from '../Emphasis'
import MenuText from '../MenuText'
import SubTitle from '../SubTitle'
import Text from '../Text'
import Title from '../Title'

type TypographyComponent =
  | typeof Emphasis
  | typeof MenuText
  | typeof SubTitle
  | typeof Text
  | typeof Title

const TypographyTest = (Component: TypographyComponent) => {
  return (
    <TestWrapper>
      <Component di="b" mt={1} tAlign="right">
        Test Jest
      </Component>
    </TestWrapper>
  )
}

describe('Typography', () => {
  ;[
    {
      Component: () => TypographyTest(Emphasis),
      nodeName: 'SPAN',
      themeObj: theme.components.emphasis,
    },
    {
      Component: () => TypographyTest(MenuText),
      nodeName: 'SPAN',
      themeObj: theme.components.menuText,
    },
    {
      Component: () => TypographyTest(SubTitle),
      nodeName: 'H3',
      themeObj: theme.components.subtitle,
    },
    {
      Component: () => TypographyTest(Text),
      nodeName: 'P',
      themeObj: theme.components.text,
    },
    {
      Component: () => TypographyTest(Title),
      nodeName: 'H1',
      themeObj: theme.components.title,
    },
  ].forEach(({ Component, nodeName, themeObj }) => {
    it('renders correctly', () => {
      render(<Component />)
      expect(screen.queryByText('Test Jest')).toBeInTheDocument()
    })

    it(`renders as a ${nodeName} node`, () => {
      const { container } = render(<Component />)
      expect(container?.firstChild?.nodeName).toBe(nodeName)
    })

    it('has style from component injector and theme', () => {
      const { container } = render(<Component />)
      expect(container.firstChild).toHaveStyleRule('color', themeObj.color)
      expect(container.firstChild).toHaveStyleRule('font-family', themeObj.fontFamily)
      expect(container.firstChild).toHaveStyleRule('font-size', themeObj.fontSize)
      expect(container.firstChild).toHaveStyleRule('font-weight', themeObj.fontWeight)
    })

    it('contains the specified CSS rules from typography injectors', () => {
      const { container } = render(<Component />)
      expect(container.firstChild).toHaveStyleRule('display', 'block')
      expect(container.firstChild).toHaveStyleRule('margin-top', theme.sizes[1])
      expect(container.firstChild).toHaveStyleRule('text-align', 'right')
    })
  })
})
