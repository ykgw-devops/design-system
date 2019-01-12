import { tint, shade } from 'polished'

import { css } from '@emotion/core'
import { clearSky, tangerine, watermelon, leaf, concrete, carbon } from '../../colors'
import { base as Icon } from '../icon/style'
import { base as Input } from '../input/input.styles'

const colorMap = {
  'blue': {
    color: clearSky,
    font: '#fff'
  },
  'orange': {
    color: tangerine,
    font: '#fff'
  },
  'red': {
    color: watermelon,
    font: '#fff'
  },
  'green': {
    color: leaf,
    font: '#fff'
  },
  'default': {
    color: concrete,
    font: carbon
  }
}

function getColors (string = 'default') {
  return colorMap[string]
}

const value = css`
  vertical-align: baseline;
  padding: 0.55em 1em;
  border-radius: 1em;

  display: flex;
  align-items: center;
  flex-direction: row;

  line-height: 1.1em;
`

const colored = (props) => {
  const { color, font } = getColors(props.color)

  return css`
    background: ${props.outline ? tint(0.2, color) : color};
    color: ${font};

    ${props.outline && `
      box-shadow: inset 0 0 0 1px ${color};
      color: ${carbon};
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
    bgColor = clearSky
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
  flex-direction: row;

  font-size: 1rem;
  line-height: 1em;
  vertical-align: middle;

  border-radius: 2em;

  .${Input} & {
    font-size: 0.875em;
  }

  .${Icon} {
    font-size: 1em;
    margin-right: 0.2em;
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
      background: ${shade(0.9, concrete)};

      &:hover {
        background: ${shade(0.8, concrete)};
      }
    `}
  `
}

export { base, close, colored, detail, focused, value }
