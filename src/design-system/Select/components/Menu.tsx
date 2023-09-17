import React from 'react'
import { components, GroupTypeBase, MenuProps, OptionTypeBase } from 'react-select'
import styled, { css } from 'styled-components'

import { merge } from 'lodash'

import { fadeIn } from 'config/animations'
import theme from 'config/theme'

const AnimatedMenu = styled(components.Menu)`
  ${({ theme }) => css`
    animation: ${fadeIn} ${theme.animations.quickEaseInOut};
  `}
`

const Menu = (
  props: React.PropsWithChildren<MenuProps<OptionTypeBase, false, GroupTypeBase<OptionTypeBase>>>,
) => {
  return <AnimatedMenu {...props} theme={merge(props.theme, theme)} />
}

export default Menu
