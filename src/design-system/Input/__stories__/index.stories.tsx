import React from 'react'
import { Meta } from '@storybook/react'

import Input, { InputProps } from '..'

const errorsStory = [
  {
    type: 'test',
    message: 'Error Message',
  },
]

const Main = ({ defaultValue, errors, id, label, name, placeholder, variant }: InputProps) => (
  <Input
    defaultValue={defaultValue}
    errors={errors && errorsStory}
    id={id}
    label={label}
    name={name}
    placeholder={placeholder}
    variant={variant}
  />
)

export default {
  title: 'Components/Input',
  args: {
    defaultValue: '',
    errors: false,
    id: 'input-story',
    label: 'Label',
    name: 'input-story',
    placeholder: 'Placeholder',
    variant: 'default',
  },
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      description: 'defaultValue - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
      },
    },
    errors: {
      control: { type: 'boolean' },
      description: 'errors - accepts ErrorMessage array of objects or boolean',
      table: {
        type: { summary: 'boolean | array' },
        defaultValue: { summary: `{ message: string; type: string }[] | false` },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'id - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
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
    name: {
      control: { type: 'text' },
      description: 'name - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
      },
    },
    variant: {
      control: { type: 'radio' },
      description: 'variant - accepts key within the options',
      options: ['default', 'textarea'],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'placeholder - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
} as Meta

export { Main as Input }
