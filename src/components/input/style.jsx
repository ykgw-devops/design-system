import { css } from '../../emotion'
import colors from '../../colors.jsx'
import { darken } from 'polished'

const base = css`
  display: inline-block;

  border: none;
  border-bottom: solid 1px ${colors.CONCRETE};
  padding: 0.5em 0em;
  -webkit-appearance: none;
  font-size: 1rem;

  line-height: 1.5em;

  &:focus {
    border-color: ${colors.CLEAR_SKY};
    box-shadow: none;
    outline: none;
  }

  &::placeholder {
    color: ${darken(0.1, colors.CONCRETE)};
    font-weight: 200;
  }
`

export { base }
