import { injectGlobal } from './emotion'
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

  body {
    font-family: 'Fira Sans', sans-serif;
    font-size: 15px;
    color: ${colors.INK};
  }
`
