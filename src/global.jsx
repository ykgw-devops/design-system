import { css, injectGlobal } from './emotion'
import colors from './colors.jsx'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;

    src: url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700&subset=latin-ext');
  }

  body, html {
    font-size: 14px;
  }

  body {
    font-family: 'Fira Sans', sans-serif;
    font-size: 15px;
    color: ${colors.INK};
  }
`

/* reset anchor defaults */
const resetAnchor = css`
  color: inherit;
  text-decoration: none;
`

export {
  resetAnchor
}
