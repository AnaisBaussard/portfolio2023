import styled from 'styled-components'

import { generateMediaQuery } from 'helpers/css'

type Props = {
  side: 'left' | 'right'
}

const MenuSideContainer = styled.li<Props>`
  ${({ side, theme }) => `
    display: inline-block;
    padding-${side}: ${theme.sizes[2]};
    position: absolute;
    ${side}: 0;
    min-width: ${theme.sizes[4.5]};
    ${generateMediaQuery(
      { theme, screenSize: 'md' },
      `
      padding-${side}: ${theme.sizes[1.5]};
    `,
    )}
  `}
`

export default MenuSideContainer
