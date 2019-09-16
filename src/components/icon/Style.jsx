import { css } from '@emotion/core'
import colors, { carbon } from '../../Colors'

const base = css`
  font-size: 1em;
  vertical-align: middle;

  user-select: none;
`

function colorFromString (color) {
  return colors.fromString(color) || color
}

const colored = props => css`
  color: ${colorFromString(props.color)};
`

const circular = props => css`
  border: solid 1px ${colorFromString(props.color)};
  border-radius: 100%;

  padding: 0.25em;
`

const filled = props => {
  const color = colorFromString(props.color || carbon)
  return css`
    border: none;
    color: white;
    background: ${color};
  `
}

export { base, colored, circular, filled }
