import { generateMediaQuery } from 'helpers/css'
import { createGlobalStyle } from 'styled-components'

const BaseCSS = createGlobalStyle`
  ${({ theme }) => `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, input, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    img {
      image-rendering: -webkit-optimize-contrast;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      border: none;
      background-image: none;
      background-color: transparent;
      box-shadow: none;
    }
    * {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
    }
    html {
      font-family: ${theme.fonts.primary};
      font-size: 16px;
      min-height: 100vh;
      position: relative;
    }
    body {
      background-color: ${theme.colors.lighterGrey};
      background: linear-gradient(90deg, ${theme.colors.lighterGrey}, ${theme.colors.lightGrey});
      height: 100%;
      line-height: 1;
      padding-bottom: ${theme.components.footer.height};
    }

    ${generateMediaQuery(
      { screenSize: 'md', theme },
      `
      html {
        font-size: 14px;
      }
    `,
    )}

    ${generateMediaQuery(
      { screenSize: 'sm', theme },
      `
      html {
        font-size: 12px;
      }
    `,
    )}
  `}
`

export default BaseCSS
