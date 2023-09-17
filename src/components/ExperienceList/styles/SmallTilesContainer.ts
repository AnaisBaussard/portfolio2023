import styled from 'styled-components'

import { Div } from 'design-system'
import { generateMediaQuery } from 'helpers/css'

const SmallTilesContainer = styled(Div)`
  ${({ theme }) => `
    ${generateMediaQuery(
      { screenSize: 'mdLg', theme },
      `
      justify-content: center;
      `,
    )}
  `}
`

export default SmallTilesContainer
