import { Theme } from 'styled-components'
import { map } from 'lodash'

import theme from 'config/theme'
import { ContainerProps, SizeProps } from '../injectors'
import { IconContainer } from './styles'

export type IconProps = {
  isClickable?: boolean
  color?: keyof Theme['colors'] | string
  gradient?: keyof Theme['gradients']
  size?: keyof Theme['sizes'] | string
} & ContainerProps &
  SizeProps

type Props = {
  gradient?: IconProps['gradient']
  paths: string[]
  viewBox: string
}

const Icon = ({ gradient, paths, ...props }: Props) => {
  return (
    <IconContainer {...props}>
      {gradient && theme.gradients[gradient as keyof Theme['gradients']]}
      {map(paths, (path, index) => (
        <path
          d={path}
          fill={gradient && `url(#${gradient}-gradient)`}
          key={`icon-${path}-${index}`}
        />
      ))}
    </IconContainer>
  )
}

export default Icon
