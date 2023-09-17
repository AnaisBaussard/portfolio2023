import React from 'react'
import { components, ContainerProps, GroupTypeBase, OptionTypeBase } from 'react-select'
import styled from 'styled-components'

import { merge } from 'lodash'

import theme from 'config/theme'
import { display, sizes } from '../../injectors'

import { SelectProps } from '..'

const StyledContainer = styled(components.SelectContainer)`
  ${display}
  ${sizes}
`

const SelectContainer = (
  props: React.PropsWithChildren<
    ContainerProps<OptionTypeBase, false, GroupTypeBase<OptionTypeBase>>
  > &
    SelectProps,
) => {
  return <StyledContainer {...props} theme={merge(props.theme, theme)} />
}

export default SelectContainer
