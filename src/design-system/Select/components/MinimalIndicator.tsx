import React from 'react'
import styled from 'styled-components'

const StyledIndicator = styled.i`
  ${({ theme }) => `
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${theme.components.select.color};
    height: 0;
    width: 0;
  `}
`

const MinimalIndicator = () => {
  return <StyledIndicator />
}

export default MinimalIndicator
