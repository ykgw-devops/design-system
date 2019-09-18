import { math, shade } from 'polished'

import colors, { carbon, clearSky } from '../../Colors'
import { fontFamily } from '../../Typography'
import { css } from '@emotion/core'
import sizes from '../../sizes'

const base = css`
  background-color: ${clearSky};
  border-radius: 4px;
  border: solid 1px ${shade(0.1, clearSky)};
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
    background-color: ${shade(0.1, clearSky)};
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
    border-color: ${shade(0.1, color)};

    &:hover {
      background-color: ${shade(0.1, color)};
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
    border: solid 1px ${colors.withWeight(color, 400)};
    background: none;
    box-shadow: none;
    color: ${color};

    &[disabled]:hover {
      background: none;
    }

    &:hover {
      background-color: ${colors.withWeight(color, 100)};
    }
  }`
}

const disabled = ({ kind }) => {
  const color = colors.fromSemantics(kind)
  const bgColor = colors.withWeight(color, 100)
  const fontColor = colors.withWeight(color, 200)
  const borderColor = colors.withWeight(color, 300)

  return css`
    color: ${fontColor};
    border-color: ${borderColor};

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
