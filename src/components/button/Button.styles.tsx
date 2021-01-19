import { math, shade, tint } from 'polished'
import { css } from '@emotion/core'

import colors, { carbon, clearSky } from '../../Colors'
import { fontFamily } from '../../Typography'
import sizes from '../../sizes'

import { IButtonProps } from './Button'

const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

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
  appearance: none;

  &:hover {
    background-color: ${shade(0.1, clearSky)};
  }
`

const kind = ({ kind = 'primary' }: IButtonProps) => {
  const color = colors.fromSemantics(kind)

  return css`
    background-color: ${color};
    color: ${colorFromProps({ kind })};
    border-color: ${shade(0.1, color)};

    &:hover {
      background-color: ${shade(0.1, color)};
    }
  `
}

const colorFromProps = ({ kind = 'secondary', outline, disabled }: IButtonProps) => {
  const color = colors.fromSemantics(kind)

  if (disabled) {
    return kind === 'secondary'
      ? colors.withWeight(color, 700)
      : colors.withWeight(color, 300)
  }

  if (outline) {
    return kind === 'secondary'
      ? carbon
      : color
  }

  if (!outline) {
    return kind === 'secondary'
      ? carbon
      : 'white'
  }

  return color
}

const pill = css`
  border-radius: 2em;
`

const outline = ({ kind }: IButtonProps) => {
  const color = colors.fromSemantics(kind)

  return css`
    border: solid 1px ${kind === 'secondary'
      ? shade(0.1, color)
      : colors.withWeight(color, 400)
    };
    background: none;
    box-shadow: none;
    color: ${colorFromProps({ kind, outline: true })};

    &[disabled]:hover {
      background: none;
    }

    &:hover {
      background-color: ${colors.withWeight(color, 100)};
    }
  `
}

const disabled = ({ kind, outline }: IButtonProps) => {
  const color = colors.fromSemantics(kind)
  const bgColor = tint(0.9, color)
  const borderColor = kind === 'secondary'
    ? colors.withWeight(color, 500)
    : colors.withWeight(color, 200)

  return css`
    color: ${colorFromProps({ kind, outline, disabled: true })};
    border-color: ${borderColor};
    background: ${outline ? 'none' : bgColor};

    cursor: default;

    &:hover {
      background: ${outline ? 'none' : bgColor};
    }
  `
}

const size = ({ size }: IButtonProps) => {
  const sizeProp = math(sizes[size] + ' * 0.9rem')

  return css`
    font-size: ${sizeProp};
    line-height: ${sizeProp};
  `
}

export { base, kind, pill, outline, disabled, size, colorFromProps }
