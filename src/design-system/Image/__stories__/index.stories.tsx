import React from 'react'
import { Meta } from '@storybook/react'

import Image, { ImageProps } from '../'

const Main = ({ alt, loading, src }: ImageProps) => {
  return <Image alt={alt} loading={loading} src={src} />
}

export default {
  component: Image,
  title: 'Components/Image',
  parameters: {
    docs: {
      description: {
        component: 'Contains the following injectors:\n\n* Container\n* Sizes',
      },
    },
  },
  args: {
    alt: 'story-img',
    loading: 'lazy',
    src: '/images/portfolio/mailjet/logo.png',
  },
  argTypes: {
    alt: {
      control: { type: 'text' },
      description: 'alt - accepts string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    loading: {
      control: { type: 'radio' },
      description: 'loading - accepts string within the options',
      options: ['eager', 'lazy'],
      table: {
        defaultValue: { summary: 'lazy' },
        type: { summary: 'string' },
      },
    },
    src: {
      control: { type: 'text' },
      description: 'src - accepts url',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/images/...' },
      },
    },
  },
} as Meta

export { Main as Image }
