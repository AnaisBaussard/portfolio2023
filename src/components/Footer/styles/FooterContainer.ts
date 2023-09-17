import styled from 'styled-components'
import { generateMediaQuery } from 'helpers/css'

const FooterContainer = styled.footer`
  ${({ theme }) => `
    background-color: ${theme.components.footer.backgroundColor};
    bottom: 0;
    display: flex;
    height: ${theme.components.footer.height};
    justify-content: space-between;
    padding: ${theme.components.footer.padding};
    position: absolute;
    width: ${theme.components.footer.width};

    ${generateMediaQuery(
      { screenSize: 'md', theme },
      `
      justify-content: center;
    `,
    )}
  `}
`

export default FooterContainer
