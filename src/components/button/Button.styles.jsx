import { math, shade, tint } from 'polished'
import { css } from '@emotion/core'

import colors, { carbon, clearSky } from '../../Colors'
import { fontFamily } from '../../Typography'
import sizes from '../../sizes'

const base = css`
  display: inline-flex;
  align-items: center;

  white-space: pre;
  text-align: center;

  background-color: ${clearSky};

  border-radius: 0.333333rem;
  border: solid 1px ${shade(0.1, clearSky)};

  color: #fff;
  cursor: pointer;

  font-family: ${fontFamily};
  font-weight: 400;

  padding: 0.65em 1em;
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

const kind = ({ kind = 'primary', outline }) => {
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
  const color = colors.fromSemantics(kind)

  return css`
    border: solid 1px ${kind === 'secondary'
      ? shade(0.1, color)
      : colors.withWeight(color, 400)
    };
    background: none;
    box-shadow: none;
    color: ${kind === 'secondary'
      ? carbon
      : color
    };

    &[disabled]:hover {
      background: none;
    }

    &:hover {
      background-color: ${colors.withWeight(color, 100)};
    }
  `
}

const disabled = ({ kind, outline }) => {
  const color = colors.fromSemantics(kind)
  const bgColor = tint(0.9, color)
  const fontColor = colors.withWeight(color, 300)
  const borderColor = colors.withWeight(color, 200)

  return css`
    color: ${fontColor};
    border-color: ${borderColor};
    background: ${outline ? 'none' : bgColor};

    cursor: default;

    &:hover {
      background: ${outline ? 'none' : bgColor};
    }
  `
}

const size = ({ size }) => {
  const sizeProp = math(sizes[size] + ' * 0.9rem')

  return css`
    font-size: ${sizeProp};
    line-height: ${sizeProp};
  `
}

export { base, kind, pill, outline, disabled, size }
