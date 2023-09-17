import styled from 'styled-components'
import { generateMediaQuery } from 'helpers/css'

import Div from '../Div'

const ResponsiveTextContainer = styled(Div)`
  ${({ tAlign = 'center', theme }) => `
    ${generateMediaQuery(
      { screenSize: 'mdLg', theme },
      `
      max-width: 100%;
      text-align: ${tAlign};
      width: 100%;
    `,
    )}
  `}
`

export default ResponsiveTextContainer
