import { css } from '../../emotion'
import colors from '../../colors'
import { resetAnchor } from '../../global'

const base = css`
  display: inline-block;
  list-style-type: none;
  line-height: 2.25em;

  padding: 0;
`

const item = css`
  a {
    ${resetAnchor};
  }

  font-size: 0.875em;

  &, > *  {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &:hover {
    color: ${colors.CLEAR_SKY};
  }

  i {
    font-size: 1.25em;
    margin-right: 0.5em;
  }
`

const active = css`
  color: ${colors.CLEAR_SKY};
`

export { base, item, active }
