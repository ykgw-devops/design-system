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
  vertical-align: baseline;
  padding: 0.6em 1em;
  border-radius: 1em;
`

const colored = (props) => {
  const { color, font } = getColors(props.color)

  return css`
    background: ${props.outline ? tint(0.2, color) : color};
    color: ${font};

    ${props.outline && `
      box-shadow: inset 0 0 0 1px ${color};
      color: ${colors.CARBON};
    `}
  `
}

// focused is the same as blue outline, but with transparent background
const focused = props => props.focused && css`
  ${colored({ color: 'blue', outline: true })};
  background: transparent;
`

const detail = (props = {}) => {
  const { color } = getColors(props.color)
  let bgColor = shade(0.85, color)

  if (props.focused) {
    bgColor = colors.CLEAR_SKY
  }

  if (props.outline) {
    bgColor = color
  }

  return css`
    ${value}
    transition: all ease 0.2s;

    ${(props.focused || props.outline) && `
      color: white;
    `}

    background-color: ${bgColor};
  `
}

const base = props => css`
  display: inline-flex;
  align-items: baseline;

  font-size: 1rem;
  line-height: 1em;
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
    padding: 0.2em;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    margin-right: -0.6em;
    margin-left: 0.4em;

    border-radius: 100%;
    cursor: pointer;
    user-select: none;

    transition: background ease 0.1s;

    background: ${shade(0.9, color)};

    &:hover {
      background: ${shade(0.8, color)};
    }

    ${props.focused && `
      background: ${shade(0.9, colors.CONCRETE)};

      &:hover {
        background: ${shade(0.8, colors.CONCRETE)};
      }
    `}
  `
}

export { base, close, colored, detail, focused, value }
