import colors from '../../colors'
import { fontFamily } from '../../typography'
import sizes from '../../sizes'
import { darken, tint, lighten, shade } from 'polished'
import { css } from '../../emotion'
import { base as Icon } from '../icon/style'

const base = css`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 0.825em 1.25em;
  color: #fff;
  border: none;
  font-weight: 400;
  vertical-align: middle;
  font-family: ${fontFamily};
  text-decoration: none;

  display: inline-block;
  text-align: center;

  background-color: ${colors.CLEAR_SKY};
  cursor: pointer;
  transition: background 80ms ease-in;

  &:hover {
    background-color: ${darken(0.05, colors.CLEAR_SKY)};
  }

  &:focus {
    /* outline: none; why did I disable this? */
  }

  .${Icon} {
    font-size: 1.5em;
    line-height: 0.875rem;
  }
`

const kind = ({ kind, outline }) => css`
  background-color: ${colors.fromSemantics(kind)};
  color: ${kind === 'secondary' ? colors.CARBON : 'white'};

  &:hover {
    background-color: ${darken(0.03, colors.fromSemantics(kind))};
  }
`

const pill = ({ pill }) => pill && css`
  border-radius: 2em;
`

const outline = ({ kind, outline }) => {
  const COLOR = colors.fromSemantics(kind)
  const borderColor = kind === 'secondary'
    ? shade(0.8, COLOR)
    : COLOR
  const fontColor = kind === 'secondary'
    ? colors.CARBON
    : COLOR

  return outline && css`{
    border: solid 1px ${borderColor};
    padding: 0.750em 1.25em;
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
      background-color: ${tint(0.1, COLOR)};
    }
  }`
}

const disabled = ({ kind, disabled }) => {
  const COLOR = colors.fromSemantics(kind)

  return disabled && css`
    cursor: default;
    background-color: ${lighten(0.3, COLOR)};
    box-shadow: none;

    &:hover {
      background: ${lighten(0.3, COLOR)};
    }
  `
}

const size = ({ size }) => {
  return css`
    font-size: ${sizes[size]};
  `
}

export { base, kind, pill, outline, disabled, size }
