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

const SubTitle = styled.h3<ContainerProps & DisplayProps & TextProps & SizeProps>`
  ${({ theme }) => `
    color: ${theme.components.subtitle.color};
    font-family: ${theme.components.subtitle.fontFamily};
    font-size: ${theme.components.subtitle.fontSize};
    font-weight: ${theme.components.subtitle.fontWeight};
  `}
  ${container}
  ${display}
  ${sizes}
  ${text}
`

export default SubTitle
