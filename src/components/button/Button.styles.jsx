import { darken, tint, math } from 'polished'

import colors, { carbon, clearSky } from '../../Colors'
import { fontFamily } from '../../Typography'
import { css } from '@emotion/core'
import sizes from '../../sizes'

const base = css`
  background-color: ${clearSky};
  border-radius: 4px;
  border: solid 1px ${darken(0.05, clearSky)};
  color: #fff;
  cursor: pointer;
  font-family: ${fontFamily};
  font-weight: 400;
  padding: 0.6em 1em;
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

const kind = ({ kind, outline }) => {
  const color = colors.fromSemantics(kind)

  return css`
    background-color: ${color};
    color: ${kind === 'secondary' ? carbon : 'white'};
    border-color:${darken(0.05, color)};

    &:hover {
      background-color: ${darken(0.05, color)};
    }
  `
}

const pill = css`
  border-radius: 2em;
`

const outline = ({ kind }) => {
  const color = kind === 'secondary'
    ? carbon
    : colors.fromSemantics(kind)

  return css`{
    border: solid 1px ${tint(0.3, color)};
    background: none;
    box-shadow: none;
    color: ${color};

    &[disabled]:hover {
      background: none;
    }

    &:hover {
      background-color: ${tint(0.8, color)};
    }
  }`
}

const disabled = ({ kind }) => {
  const color = colors.fromSemantics(kind)
  const bgColor = tint(0.9, color)
  const fontColor = tint(0.5, color)

  return css`
    color: ${fontColor};
    border-color: ${fontColor};

    background-color: ${bgColor};
    cursor: default;

    &:hover {
      background: ${bgColor};
    }
  `
}

const size = ({ size }) => {
  return css`
    font-size: ${math(sizes[size] + ' * 0.9rem')};
  `
}

export { base, kind, pill, outline, disabled, size }
