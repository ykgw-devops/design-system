import { css } from '../../emotion'
import colors from '../../colors.jsx'

const base = css`
  display: inline-block;
  list-style-type: none;
  line-height: 2.25em;
`

const item = css`
  font-size: 0.875em;

  &, > *  {
    display: flex;
    align-items: center;
  }

  &:hover {
    color: ${colors.CLEAR_SKY};
  }

  /* reset anchor default color */
  a { color: inherit; }

  i {
    font-size: 1.25em;
    margin-right: 0.5em;
  }
`

const active = css`
  color: ${colors.CLEAR_SKY};
`

export { base, item, active }
