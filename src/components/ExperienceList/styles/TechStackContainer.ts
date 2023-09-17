import styled from 'styled-components'

import { Div } from 'design-system'
import { generateMediaQuery } from 'helpers/css'

const TechStackContainer = styled(Div)`
  ${({ theme }) => `
    margin-top: ${theme.sizes[4]};
    ${generateMediaQuery(
      { screenSize: 'mdLg', theme },
      `
      align-items: center;
      margin-top: ${theme.sizes[2]};
      `,
    )}
  `}
`

export default TechStackContainer
