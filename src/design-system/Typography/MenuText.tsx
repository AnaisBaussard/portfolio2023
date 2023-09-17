import styled from 'styled-components'
import {
  ContainerProps,
  container,
  DisplayProps,
  display,
  SizeProps,
  sizes,
  text,
  TextProps,
} from '../injectors'

const MenuText = styled.span<ContainerProps & DisplayProps & TextProps & SizeProps>`
  ${({ theme }) => `
    color: ${theme.components.menuText.color};
    font-family: ${theme.components.menuText.fontFamily};
    font-size: ${theme.components.menuText.fontSize};
    font-weight: ${theme.components.menuText.fontWeight};
    text-transform: ${theme.components.menuText.textTransform};
  `}
  ${container}
  ${display}
  ${sizes}
  ${text}
`

export default MenuText
