import { css } from '../../emotion'
import colors from '../../colors'
import { tint, shade } from 'polished'

import { base as Icon } from '../icon/style'
import { base as Input } from '../input/style'

const colorMap = {
  'blue': {
    color: colors.CLEAR_SKY,
    font: '#fff'
  },
  'orange': {
    color: colors.TANGERINE,
    font: '#fff'
  },
  'red': {
    color: colors.WATERMELON,
    font: '#fff'
  },
  'default': {
    color: colors.CONCRETE,
    font: colors.CARBON
  }
}

function getColors (string = 'default') {
  return colorMap[string]
}

const value = css`
  display: inline-block;
  padding: 0.25em 0.8em;
  border-radius: 20px;
`

const colored = (props) => {
  const { color, font } = getColors(props.color)

  return css`
    background: ${props.outline
      ? tint(0.2, color)
      : color
    };
    color: ${font};

    ${props.outline && `
      border: solid 1px ${color};
      color: ${colors.CARBON};
    `}
  `
}

const detail = (props = {}) => {
  const { color } = getColors(props.color)

  return css`
    ${value}
    background-color: ${shade(0.85, color)};
  `
}

const base = props => css`
  display: inline-block;

  font-size: 1rem;
  vertical-align: middle;

  border-radius: 20px;

  .${Input} & {
    font-size: 0.875em;
  }

  .${Icon} {
    font-size: 1em;
  }

  /* hug the value a bit tighter to the name */
  .${detail(props)} + .${value} {
    padding-left: 0.4em;
  }
`

const close = props => {
  const { color } = getColors(props.color)

  return css`
    /* make hitbox a bit bigger for close icon */
    padding: 3px;
    margin: -5px;
    margin-left: 3px;

    border-radius: 100%;
    cursor: pointer;

    background: ${shade(0.9, color)};

    &:hover {
      background: ${shade(0.8, color)};
    }
  `
}

export { base, close, colored, detail, value }
