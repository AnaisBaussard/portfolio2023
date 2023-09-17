import { animated } from 'react-spring'
import styled from 'styled-components'

import { container, display } from 'design-system/injectors'
import { DrawerProps } from '../'

const DrawerContainer = styled(animated.aside)<DrawerProps>`
  ${({ theme }) => `
    background-color: ${theme.components.drawer.backgroundColor};
    height: ${theme.components.drawer.height};
    left: 0;
    position: fixed;
    top: 0;
    width: ${theme.components.drawer.width};
    z-index: 10;
  `}
  ${container}
  ${display}
`

export default DrawerContainer
