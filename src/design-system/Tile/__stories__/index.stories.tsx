import React from 'react'
import { Meta } from '@storybook/react'

import Tile, { TileProps } from '..'

const Main = ({ color, gradient, href, iconSrc, imgAlt, imgTileSrc, mode, text }: TileProps) => (
  <Tile
    color={color}
    gradient={gradient}
    href={href}
    iconSrc={iconSrc}
    imgAlt={imgAlt}
    imgTileSrc={imgTileSrc}
    mode={mode}
    text={text}
  />
)

export default {
  component: Tile,
  title: 'Components/Tile',
  parameters: {
    docs: {
      description: {
        component: 'Contains the following injectors:\n\n* Container\n* Display\n* Sizes\n* Text',
      },
    },
  },
  args: {
    color: 'primary',
    gradient: 'regateV',
    href: '/',
    iconSrc: '/images/portfolio/regate/logo-white-icon.png',
    imgAlt: 'regate-logo',
    imgTileSrc: '/images/portfolio/regate/logo-white.png',
    mode: 'default',
    text: '',
  },
  argTypes: {
    color: {
      control: { type: 'color' },
      description: 'color - accepts theme color key or string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary | secondary | #000000' },
      },
    },
    gradient: {
      control: { type: 'text' },
      description: 'gradient - accepts theme gradient key',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regate | regateV' },
      },
    },
    href: {
      control: { type: 'text' },
      description: 'href - accepts an url',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'https://...' },
      },
    },
    iconSrc: {
      control: { type: 'text' },
      description: 'iconSrc - accepts an url for the icon mode image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/images/...' },
      },
    },
    imgAlt: {
      control: { type: 'text' },
      description: 'imgAlt - accepts a string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regate-logo' },
      },
    },
    imgTileSrc: {
      control: { type: 'text' },
      description: 'imgTileSrc - accepts an url for the non-icon mode image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/images/...' },
      },
    },
    mode: {
      control: { type: 'radio' },
      description: "mode - accepts any key that fits a component's 'modes' object in the theme",
      options: ['default', 'icon', 'small'],
      table: {
        defaultValue: { summary: 'small' },
        type: { summary: 'string' },
      },
    },
    text: {
      control: { type: 'text' },
      description: 'text - accepts a string and replaces image if defined',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: '' },
      },
    },
  },
} as Meta

export { Main as Tile }
