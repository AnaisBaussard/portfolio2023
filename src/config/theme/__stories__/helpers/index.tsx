import React from 'react'
import styled from 'styled-components'
import { map } from 'lodash'

import { Div, Emphasis, SubTitle, Text } from 'design-system'

const ColorSquare = styled(Div)`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.lightGrey};
    height: 45px;
    width: 65px;
  `}
`

export const visuallyGenerateTheme = (
  themeObject: ComponentObject,
  mode: 'object' | 'colors' = 'object',
): JSX.Element[] => {
  switch (mode) {
    case 'colors':
      return map(themeObject, (val, key) => (
        <Div ai="ce" di="f" key={`colors-${key}`}>
          <ColorSquare bg={val as string} bgC={val as string} />
          <Text ml={0.5} tSize={1}>
            {key}
            {` - `}
            {val}
          </Text>
        </Div>
      ))
    default:
      return map(themeObject, (val, key) => {
        if (typeof val === 'object') {
          return (
            <Div mb={key === 'lg' || key === 'md' || key === 'sm' ? 0 : 3} key={`theme-${key}`}>
              <SubTitle
                mb={1}
                mt={1}
                tSize={key === 'lg' || key === 'md' || key === 'sm' ? 1.125 : undefined}
              >
                {key}
              </SubTitle>
              {visuallyGenerateTheme(val)}
            </Div>
          )
        } else {
          return (
            <Div di="f" key={`theme-${key}`}>
              <Text mr={0.5} tSize={1}>
                <Emphasis>{key}</Emphasis>
                {` = `}
                {val}
              </Text>
            </Div>
          )
        }
      })
  }
}
