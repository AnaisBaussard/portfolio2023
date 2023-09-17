import styled, { css } from 'styled-components'
import RouterLink from 'next/link'

import { display, DisplayProps, SizeProps, sizes, text, TextProps } from '../injectors'

export type LinkProps = {
  children?: React.ReactNode
  href: string
  isInherited?: boolean
  isUnderlined?: boolean
  locale?: string | false // RouterLink's locale prop, useful for changing locale route prefix
} & DisplayProps &
  SizeProps &
  TextProps

const StyledLink = styled.a<Omit<LinkProps, 'href'>>`
  ${({ isInherited, isUnderlined = true, theme }) => css`
    color: ${theme.components.link.color};
    cursor: pointer;
    font-family: ${theme.components.link.fontFamily};
    font-size: ${theme.components.link.fontSize};
    font-weight: ${theme.components.link.fontWeight};
    line-height: ${theme.components.link.lineHeight};
    text-decoration: ${isUnderlined ? theme.components.link.textDecoration : 'none'};
    transition: color ${theme.animations.quickEaseOut};

    &:hover {
      color: ${theme.components.link.hover.color};
    }

    ${isInherited &&
    css`
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    `}
  `}
  ${display}
  ${sizes}
  ${text}
`

const Link = ({ children, href, locale, ...props }: LinkProps) => {
  return (
    <RouterLink href={href} locale={locale} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </RouterLink>
  )
}

export default styled(Link)``
