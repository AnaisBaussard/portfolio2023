import React from 'react'
import { Theme } from 'styled-components'

import { ContainerProps, DisplayProps, SizeProps, TextProps } from '../injectors'
import { Spinner } from '../Icon'

import { ButtonContainer } from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  color?: keyof Theme['colors'] | string
  disabled?: boolean
  isLoading?: boolean
} & ContainerProps &
  DisplayProps &
  SizeProps &
  TextProps

interface ButtonTypeMap<P = Record<string, unknown>, D extends React.ElementType = 'button'> {
  props: P & ButtonProps
  defaultComponent: D
}

type Props<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = Record<string, unknown>,
> = OverrideProps<ButtonTypeMap<P, D>, D>

const Button: OverridableComponent<ButtonTypeMap> = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <ButtonContainer
      disabled={props.disabled || props.isLoading ? true : undefined}
      ref={ref}
      {...props}
    >
      {props.isLoading ? <Spinner color="lighterGrey" /> : children}
    </ButtonContainer>
  ),
)

Button.displayName = 'Button'
export default Button
