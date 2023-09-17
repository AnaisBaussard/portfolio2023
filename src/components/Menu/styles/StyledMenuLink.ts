import styled, { css } from 'styled-components'

import { Link } from 'design-system'
import { generateMediaQuery } from 'helpers/css'

type MenuLinkProps = {
  isActive?: boolean
}

const StyledMenuLink = styled.li<MenuLinkProps>`
  ${({ isActive, theme }) => css`
    display: inline-block;
    padding: 0 ${theme.sizes[1]};
    position: relative;

    > ${Link} {
      color: ${theme.components.menuText.color};
      display: inline-block;
      height: 65px;
      line-height: 65px;
      text-decoration: none;
      width: 100%;

      &:hover {
        color: ${theme.components.menuText.color};
      }
    }

    &::after {
      background-color: ${theme.components.menu.focusedBorderColor};
      bottom: 0;
      content: '';
      height: 1px;
      position: absolute;
      transition: 0.16s all 0.025s;
    }

    &::after {
      left: 100%;
      right: 0;
      ${isActive && `left: 0%;`};
    }

    *:hover > &::after {
      ${isActive && `left: 100%;`};
    }

    &:hover ~ &::after {
      left: 0;
      right: 100%;
    }

    &:hover::after {
      left: 0 !important;
      right: 0 !important;
    }

    ${generateMediaQuery(
      { theme, screenSize: 'md' },
      `
      display: block;
      text-align: center;
    `,
    )}
  `}
`

export default StyledMenuLink
