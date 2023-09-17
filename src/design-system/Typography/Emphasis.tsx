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

const Emphasis = styled.span<ContainerProps & DisplayProps & TextProps & SizeProps>`
  ${({ theme }) => `
    color: ${theme.components.emphasis.color};
    font-family: ${theme.components.emphasis.fontFamily};
    font-size: ${theme.components.emphasis.fontSize};
    font-weight: ${theme.components.emphasis.fontWeight};
  `}
  ${container}
  ${display}
  ${sizes}
  ${text}
`

export default Emphasis
