import { css } from '@emotion/core'
import colors, { carbon } from '../../Colors'

import { IIconProps } from './Icon'

const base = css`
  font-size: 1em;
  vertical-align: middle;

  user-select: none;
`

function colorFromString (color: string) {
  return colors.fromString(color) || color
}

const colored = (props: IIconProps) => css`
  color: ${colorFromString(props.color)};
`

const circular = (props: IIconProps) => css`
  border: solid 1px ${colorFromString(props.color)};
  border-radius: 100%;

  padding: 0.25em;
`

const filled = (props: IIconProps) => {
  const color = colorFromString(props.color || carbon)

  return css`
    border: none;
    color: white;
    border-color: ${color};
    background: ${color};
  `
}

export { base, colored, circular, filled }
