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

const Text = styled.p<ContainerProps & DisplayProps & TextProps & SizeProps>`
  ${({ theme }) => `
    color: ${theme.components.text.color};
    font-family: ${theme.components.text.fontFamily};
    font-size: ${theme.components.text.fontSize};
    font-weight: ${theme.components.text.fontWeight};
    line-height: ${theme.components.text.lineHeight};
  `}
  ${container}
  ${display}
  ${sizes}
  ${text}
`

export default Text
