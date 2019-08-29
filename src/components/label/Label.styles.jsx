import { tint, shade } from 'polished'

import { css } from '@emotion/core'
import { clearSky, tangerine, watermelon, leaf, concrete, carbon } from '../../Colors'
import { base as Icon } from '../icon/Style'
import { base as Input } from '../input/Input.styles'
import sizes from '../../sizes'

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

const child = css`
  border-radius: 1em;
  display: inline-flex;
  height: 100%;
  align-items: center;
  padding: 0 1em;
`

// this is the value item, after the named item
// if it is a named label we should apply some negative margin
const value = props => css`
  ${child};
  ${props.name && `margin-left: -0.5em;`}
`

// this is the detaild child for named labels
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
    ${child};
    padding: 0 1em;
    transition: all ease 0.2s;

    ${(props.focused || props.outline) && `
      color: white;
    `}

    background-color: ${bgColor};
  `
}

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

const base = props => css`
  display: inline-flex;
  align-items: center;
  flex-direction: row;

  font-size: 1rem;
  vertical-align: middle;

  border-radius: 2em;
  height: 2em;
`

const close = props => {
  const { color } = getColors(props.color)

  return css`
    /* make hitbox a bit bigger for close icon */
    padding: 0.2em;
    font-size: 0.85em;

    margin-left: 0.5em;
    margin-right: -0.25em;
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

const size = ({ size }) => css`font-size: ${sizes.fromString(size)};`

export { base, close, colored, detail, focused, value, size }
