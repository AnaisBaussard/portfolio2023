import React from 'react'
import { components, InputProps } from 'react-select'
import styled from 'styled-components'

import { merge } from 'lodash'

import theme from 'config/theme'

const StyledInput = styled(components.Input)`
  ${({ theme }) => `
    input, div {
      font-family: ${theme.components.select.fontFamily} !important;
      font-size: ${theme.components.select.fontSize} !important;
      font-weight: ${theme.components.select.fontWeight} !important;
    }
  `}
`

const Input = (props: React.PropsWithChildren<InputProps>) => {
  return <StyledInput {...props} data-testid="select-input" theme={merge(props.theme, theme)} />
}

export default Input
