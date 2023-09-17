import styled from 'styled-components'

import { Input } from 'design-system'
import { generateMediaQuery } from 'helpers/css'

const FormContainer = styled.form`
  ${({ theme }) => `
    margin-top: ${theme.sizes[2]};

    ${generateMediaQuery(
      { screenSize: 'md', theme },
      `
      ${Input} {
        width: 100%;
      }
    `,
    )}
  `}
`

export default FormContainer
