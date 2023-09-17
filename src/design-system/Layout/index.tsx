import styled, { css } from 'styled-components'
import Div from '../Div'

export type LayoutProps = {
  bottomMargin?: boolean
  topMargin?: boolean
}

const Layout = styled(Div)<LayoutProps>`
  ${({ bottomMargin, theme, topMargin }) => css`
    ${bottomMargin && `margin-bottom: ${theme.components.layout.margin};`};
    margin-left: auto;
    margin-right: auto;
    ${topMargin && `margin-top: ${theme.components.layout.margin};`};
    max-width: ${theme.components.layout.maxWidth};
    padding: ${theme.components.layout.padding};
  `}
`

export default Layout
