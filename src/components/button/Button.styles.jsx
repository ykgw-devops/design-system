import { darken, tint, lighten, shade, math } from 'polished'

import colors, { carbon, clearSky } from '../../Colors'
import { fontFamily } from '../../Typography'
import { css } from '@emotion/core'
import sizes from '../../sizes'

const base = css`
  background-color: ${clearSky};
  border-radius: 4px;
  border: none;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  cursor: pointer;
  font-family: ${fontFamily};
  font-weight: 400;
  padding: 0.75em 1.2em;
  text-align: center;
  text-decoration: none;
  transition: background 80ms ease-in;
  vertical-align: middle;

  &:hover {
    background-color: ${darken(0.05, clearSky)};
  }

  &:focus {
    /* outline: none; why did I disable this? */
    /* I disabled this for the clicking state, it's rather annoying */
  }
`

const kind = ({ kind, outline }) => css`
  background-color: ${colors.fromSemantics(kind)};
  color: ${kind === 'secondary' ? carbon : 'white'};

  &:hover {
    background-color: ${darken(0.03, colors.fromSemantics(kind))};
  }
`

const pill = css`
  border-radius: 2em;
`

const outline = ({ kind }) => {
  const COLOR = colors.fromSemantics(kind)

  const borderColor = kind === 'secondary'
    ? shade(0.8, COLOR)
    : COLOR

  const fontColor = kind === 'secondary'
    ? carbon
    : COLOR

  return css`{
    border: solid 1px ${borderColor};
    background: none;
    box-shadow: none;
    color: ${fontColor};

    &[disabled]:hover {
      background: none;
    }

    &[disabled] {
      color: ${lighten(0.15, COLOR)};
      border-color: ${lighten(0.15, COLOR)};
    }

    &:hover {
      background-color: ${tint(0.8, COLOR)};
    }
  }`
}

const disabled = ({ kind }) => {
  const color = colors.fromSemantics(kind)

  return css`
    background-color: ${lighten(0.3, color)};
    box-shadow: none;
    cursor: default;

    &:hover {
      background: ${lighten(0.3, color)};
    }
  `
}

const size = ({ size }) => {
  return css`
    font-size: ${math(sizes[size] + '* 0.9')};
  `
}

export { base, kind, pill, outline, disabled, size }
