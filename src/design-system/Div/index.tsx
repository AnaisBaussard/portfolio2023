import styled from 'styled-components'

import {
  container,
  ContainerProps,
  display,
  DisplayProps,
  SizeProps,
  sizes,
  text,
  TextProps,
} from '../injectors'

export type DivProps = ContainerProps & DisplayProps & SizeProps & TextProps

const Div = styled.div<DivProps>`
  ${container}
  ${display}
  ${sizes}
  ${text}
`

export default Div
