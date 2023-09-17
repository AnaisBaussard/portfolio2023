import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { map } from 'lodash'

import Div from '../Div'
import { SizeProps } from '../injectors'
import { Text } from '../Typography'

export type InputProps = {
  defaultValue?: string
  errors?: { message: string; type: string }[] | boolean
  id: string
  label?: string | React.ReactNode
  name: string
  variant?: 'default' | 'textarea'
} & React.InputHTMLAttributes<HTMLInputElement> &
  SizeProps

const StyledInput = styled.input<InputProps>`
  ${({ errors, theme }) => css`
    background-color: ${theme.components.input.backgroundColor};
    border-radius: ${theme.components.input.borderRadius};
    border: 1px solid ${theme.components.input.borderColor};
    font-family: ${theme.components.input.fontFamily};
    font-size: ${theme.components.input.fontSize};
    font-weight: ${theme.components.input.fontWeight};
    height: ${theme.components.input.height};
    line-height: ${theme.components.input.lineHeight};
    padding: ${theme.components.input.padding};
    transition: border-color ${theme.animations.quickEaseOut};
    width: ${theme.components.input.width};

    &:focus {
      border: 1px solid ${theme.components.input.focus.borderColor};
      outline: 0;
    }

    ${errors &&
    css`
      border: 1px solid ${theme.components.input.error.borderColor};
    `}
  `}
`

const StyledTextarea = styled(StyledInput).attrs({ as: 'textarea' })<InputProps>`
  ${({ theme }) => css`
    height: ${theme.components.input.textarea.height};
    padding: ${theme.components.input.textarea.padding};
    resize: none;
    width: ${theme.components.input.textarea.width};
  `}
`

const Input = ({
  className,
  defaultValue = '',
  label,
  mb,
  ml,
  mr,
  mt,
  variant = 'default',
  ...props
}: InputProps) => {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <Div mb={mb} ml={ml} mr={mr} mt={mt}>
      <label htmlFor={props.id}>
        {label && (
          <Text mb={0.25} tColor={props?.errors ? 'red' : undefined} weight="bold">
            {label}
          </Text>
        )}
        {variant === 'textarea' && (
          <StyledTextarea
            className={className}
            onChange={handleChange}
            value={value}
            type="text"
            {...props}
          />
        )}
        {variant === 'default' && (
          <StyledInput
            className={className}
            onChange={handleChange}
            value={value}
            type="text"
            {...props}
          />
        )}
        {props.errors && typeof props.errors === 'object' && (
          <Div di="f" fd="c">
            {map(props.errors, ({ message }, index) => (
              <Text key={`input-${props.name}-errormessage-${index}`} mt={0.25} tColor="red">
                {message}
              </Text>
            ))}
          </Div>
        )}
      </label>
    </Div>
  )
}

export default Input
