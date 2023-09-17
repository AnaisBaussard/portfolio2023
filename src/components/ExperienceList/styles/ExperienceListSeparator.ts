import styled from 'styled-components'
import { Separator } from 'design-system'
import { generateMediaQuery } from 'helpers/css'

const ExperienceListSeparator = styled(Separator)`
  ${({ theme }) => `
    margin-left: ${theme.sizes[0]};
    margin-top: ${theme.sizes[0.75]};
    ${generateMediaQuery(
      { screenSize: 'mdLg', theme },
      `
        margin-left: auto;
      `,
    )}
  `}
`

export default ExperienceListSeparator
