import { injectGlobal } from './emotion'
import colors from './colors'

const global = injectGlobal`
  * {
    box-sizing: border-box;
  }

  body, html {
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-weight: 400;
  }

  body {
    font-family: 'Fira Sans', sans-serif;
    color: ${colors.INK};
  }
`

export default global
