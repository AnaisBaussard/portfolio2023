import React from 'react'
import { Meta } from '@storybook/react'

import Select, { SelectProps } from '..'

const defaultOptions = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
]

const minimalOptions = [
  {
    label: 'FR',
    value: 'fr',
  },
  {
    label: 'EN',
    value: 'en',
  },
]

const Main: React.VFC = ({
  defaultValue,
  isDisabled,
  isMulti,
  label,
  options,
  variant,
}: SelectProps) => (
  <Select
    defaultValue={variant === 'minimal' ? minimalOptions[0] : defaultValue}
    isDisabled={isDisabled}
    isMulti={isMulti}
    label={label}
    options={variant === 'minimal' ? minimalOptions : options}
    variant={variant}
  />
)

export default {
  component: Select,
  title: 'Components/Select',
  parameters: {
    docs: {
      description: {
        component: `Contains the following injectors:\n\n* Display\n* Sizes`,
      },
    },
  },
  args: {
    defaultValue: null,
    isDisabled: false,
    isMulti: false,
    label: 'Label',
    options: defaultOptions,
    variant: 'default',
  },
  argTypes: {
    defaultValue: {
      control: { type: 'object' },
      description: 'defaultValue - accepts an object',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: `{ label: string; value: string }` },
      },
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'isDisabled - boolean value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isMulti: {
      control: { type: 'boolean' },
      description: 'isMulti - boolean value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'label - accepts string or React element',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
      },
    },
    options: {
      control: { type: 'array' },
      description: 'options - accepts an array of objects',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: `{ label: string; value: string }[]` },
      },
    },
    variant: {
      control: { type: 'radio' },
      description: 'variant - accepts key within the options',
      options: ['default', 'minimal'],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
    },
  },
} as Meta

export { Main as Select }
