import React from 'react'
import { Meta } from '@storybook/react'

import { SubTitle } from '../../Typography'
import Link, { LinkProps } from '..'

const Main = ({ href, isInherited, isUnderlined }: LinkProps) => (
  <>
    <Link href={href} isInherited={isInherited} isUnderlined={isUnderlined}>
      Link
    </Link>
    <br />
    <br />
    <SubTitle>
      SubTitle with{' '}
      <Link href={href} isInherited isUnderlined={isUnderlined}>
        inherited link in it
      </Link>
      .
    </SubTitle>
  </>
)

export default {
  title: 'Components/Link',
  parameters: {
    docs: {
      description: {
        component: `Contains the following injectors:\n\n* Sizes\n* Text`,
      },
    },
  },
  args: {
    href: 'https://reactrouter.com/web/api/Link',
    isInherited: false,
    isUnderlined: true,
  },
  argTypes: {
    href: {
      control: { type: 'text' },
      description: 'href - accepts url',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '/',
        },
      },
    },
    isInherited: {
      control: { type: 'boolean' },
      description: 'isInherited - accepts boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    isUnderlined: {
      control: { type: 'boolean' },
      description: 'isUnderlined - accepts boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
} as Meta

export { Main as Link }
