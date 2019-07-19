import { css } from '@emotion/core'
import colors from '../../Colors'

const base = css`
  font-size: 1em;
  vertical-align: middle;

  user-select: none;
`

const colored = props => css`
  color: ${colors.fromString(props.color)};
`

export { base, colored }
