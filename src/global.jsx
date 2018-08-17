import { css, injectGlobal } from './emotion'
import colors from './colors.jsx'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600&subset=latin-ext');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css');

  body, html {
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }

  body {
    font-family: 'Fira Sans', sans-serif;
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
