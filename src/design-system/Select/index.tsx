import React from 'react'
import SelectBase, {
  ContainerProps,
  GroupTypeBase,
  OptionTypeBase,
  StylesConfig,
} from 'react-select'
import { SelectComponentsProps } from 'react-select/src/Select'
import { Theme } from 'styled-components'

import theme from 'config/theme'
import { ContainerProps as ContainerInjectorProps, DisplayProps, SizeProps } from '../injectors'
import { Text } from '../Typography'

import { Input, Menu, MinimalIndicator, SelectContainer } from './components'

export type SelectProps = {
  variant?: 'default' | 'minimal'
  w?: ContainerInjectorProps['w']
} & SelectComponentsProps &
  DisplayProps &
  SizeProps

const Select = (props: SelectProps) => {
  const defaultStyle: StylesConfig<OptionTypeBase, false> = {
    container: (initialStyle, state) => ({
      ...initialStyle,
      width: props.w
        ? theme.sizes[props.w as keyof Theme['sizes']] || props.w
        : theme.components.select.width,
      opacity: state.isDisabled ? '0.5' : '1',
    }),
    control: (_initialStyle, state) => ({
      backgroundColor: theme.components.select.backgroundColor,
      border: `1px solid ${
        state.isFocused
          ? theme.components.select.focus.borderColor
          : theme.components.select.borderColor
      }`,
      borderRadius: theme.components.select.borderRadius,
      color: theme.components.select.color,
      display: 'flex',
      paddingLeft: theme.components.select.paddingLeft,
    }),
    dropdownIndicator: (initialStyle, state) => ({
      ...initialStyle,
      color: state.isFocused
        ? theme.components.select.focus.indicatorColor
        : theme.components.select.borderColor,
    }),
    indicatorSeparator: initialStyle => ({
      ...initialStyle,
      backgroundColor: theme.components.select.borderColor,
    }),
    menu: initialStyle => ({
      ...initialStyle,
      backgroundColor: theme.components.select.menuBgColor,
      marginTop: '0',
    }),
    multiValue: initialStyle => ({
      ...initialStyle,
      backgroundColor: theme.components.select.multi.backgroundColor,
      padding: theme.components.select.multi.padding,
    }),
    multiValueLabel: initialStyle => ({
      ...initialStyle,
      color: theme.components.select.color,
      fontFamily: theme.components.select.fontFamily,
      fontSize: theme.components.select.fontSize,
    }),
    multiValueRemove: initialStyle => ({
      ...initialStyle,
      marginLeft: theme.components.select.multi.padding,
      ':hover': {
        backgroundColor: theme.components.select.backgroundColor,
      },
    }),
    option: (initialStyle, state) => ({
      ...initialStyle,
      backgroundColor: state.isFocused
        ? theme.components.select.backgroundColor
        : theme.components.select.menuBgColor,
      color: theme.components.select.color,
      fontWeight: state.isSelected ? 'bold' : 'normal',
    }),
    placeholder: initialStyle => ({
      ...initialStyle,
      color: theme.components.select.placeholder.color,
      fontFamily: theme.components.select.fontFamily,
      fontSize: theme.components.select.fontSize,
    }),
    valueContainer: initialStyle => ({
      ...initialStyle,
      color: theme.components.select.color,
      fontFamily: theme.components.select.fontFamily,
      fontSize: theme.components.select.fontSize,
    }),
    input: initialStyle => ({
      ...initialStyle,
      fontWeight: 'normal',
    }),
  }

  const minimalStyle: StylesConfig<OptionTypeBase, false> = {
    container: (initialStyle, state) => ({
      ...initialStyle,
      maxWidth: theme.components.select.minimal.maxWidth,
      opacity: state.isDisabled ? '0.5' : '1',
    }),
    control: () => ({
      display: 'flex',
    }),
    dropdownIndicator: (initialStyle, state) => ({
      ...initialStyle,
      color: state.isFocused
        ? theme.components.select.focus.indicatorColor
        : theme.components.select.borderColor,
      height: '10px',
      width: '10px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: initialStyle => ({
      ...initialStyle,
      backgroundColor: theme.components.select.menuBgColor,
      marginTop: '0',
    }),
    option: (initialStyle, state) => ({
      ...initialStyle,
      backgroundColor: state.isFocused
        ? theme.components.select.backgroundColor
        : theme.components.select.menuBgColor,
      color: theme.components.select.minimal.color,
      fontFamily: theme.components.select.minimal.fontFamily,
      fontSize: theme.components.select.minimal.fontSize,
      textTransform: theme.components.select.minimal.textTransform as 'uppercase',
    }),
    valueContainer: initialStyle => ({
      ...initialStyle,
      color: theme.components.select.minimal.color,
      fontFamily: theme.components.select.minimal.fontFamily,
      fontSize: theme.components.select.minimal.fontSize,
      textTransform: theme.components.select.minimal.textTransform as 'uppercase',
    }),
  }

  const SelectContainerWithInjectors = (
    initialProps: React.PropsWithChildren<
      ContainerProps<OptionTypeBase, false, GroupTypeBase<OptionTypeBase>>
    >,
  ) => <SelectContainer {...initialProps} {...props} />

  return (
    <label htmlFor={props.id}>
      {props.label && (
        <Text mb={0.25} tColor={props?.errors ? 'red' : undefined} weight="bold">
          {props.label}
        </Text>
      )}
      <SelectBase
        components={{
          Input,
          Menu,
          SelectContainer: SelectContainerWithInjectors,
          ...(props.variant === 'minimal' && { DropdownIndicator: MinimalIndicator }),
        }}
        isSearchable={props.variant !== 'minimal'}
        styles={props.variant === 'minimal' ? minimalStyle : defaultStyle}
        {...props}
      />
    </label>
  )
}

export default Select
