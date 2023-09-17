import styled, { css } from 'styled-components'
import { container, ContainerProps, SizeProps, sizes } from '../injectors'

export type ImageProps = {
  alt?: string
  loading?: 'eager' | 'lazy'
  rounded?: boolean
  src: string
} & ContainerProps &
  SizeProps

const Image = styled.img<ImageProps>`
  ${({ rounded }) => css`
    ${rounded && 'border-radius: 50%;'};
    max-width: 100%;
  `}
  ${container}
  ${sizes}
`

Image.defaultProps = {
  alt: '',
  loading: 'lazy',
}

export default Image
