import { generateMediaQuery } from 'helpers/css'
import styled from 'styled-components'

const MenuContainer = styled.menu`
  ${({ theme }) => `
    align-items: center;
    background-color: ${theme.components.menu.backgroundColor};
    display: flex;
    height: ${theme.components.menu.height};
    justify-content: center;
    position: relative;
    width: ${theme.components.menu.width};
    ${generateMediaQuery(
      { theme, screenSize: 'md' },
      `
      height: ${theme.components.menu.md.height};
    `,
    )}
  `}
`

export default MenuContainer
