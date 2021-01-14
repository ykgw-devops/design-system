import { tint, shade, readableColor } from 'polished'

import { css } from '@emotion/core'
import { ILabelProps } from './Label'
import colors, { clearSky, concrete, carbon, Strings } from '../../Colors'
import sizes from '../../sizes'

const colorMap = {
  default: {
    color: concrete,
    font: carbon
  }
}

function getColors (string) {
  if (!string) return colorMap.default

  const colorFromString = colors.fromString(string)

  if (colorFromString) {
    return {
      color: colorFromString,
      font: isDefaultColor(string) ? carbon : 'white'
    }
  } else {
    return {
      color: string,
      font: readableColor(string)
    }
  }
}

const child = css`
  border-radius: 1em;
  display: inline-flex;
  height: 100%;
  align-items: center;
  padding: 0 1em;
  white-space: pre;
`

// this is the value item, after the named item
// if it is a named label we should apply some negative margin
const value = props => css`
  ${child};
  ${props.name && 'margin-left: -0.5em;'}
`

// this is the detaild child for named labels
const detail = (props) => {
  const { color, font } = getColors(props.color)
  let bgColor = shade(0.25, color)

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

    ${(props.focused || props.outline) && 'color: white;'}
    ${(props.outline && isDefaultColor(props.color)) && `color: ${font};`}

    background-color: ${bgColor};
  `
}

const colored = (props) => {
  const { color, font } = getColors(props.color)

  return css`
    background: ${props.outline ? tint(0.8, color) : color};
    color: ${font};

    ${props.outline && `
      box-shadow: inset 0 0 0 1px ${color};
      color: ${isDefaultColor(props.color) ? carbon : shade(0.1, color)};
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
    height: 1.25em;
    width: 1.25em;

    text-align: center;
    font-family: monospace;
    font-size: 0.9em;
    line-height: 1.4em;

    margin-left: 0.5em;
    margin-right: -0.5em;
    border-radius: 100%;
    cursor: pointer;
    user-select: none;
    color: white;

    transition: background ease 0.1s;

    background: ${shade(0.3, color)};
    ${props.outline && (
      `background: ${isDefaultColor(props.color) ? shade(0.2, color) : color};`
    )}

    &:hover {
      background: ${shade(0.2, color)};
    }

    ${props.focused && `
      background: ${shade(0.1, concrete)};

      &:hover {
        background: ${shade(0.2, concrete)};
      }
    `}
  `
}

const size = ({ size }: ILabelProps) => css`font-size: ${sizes.fromString(size)};`

const DEFAULTS = ['default', '', 'grey']
const isDefaultColor = (color) => DEFAULTS.includes(color)

export { base, close, colored, detail, focused, value, size }
