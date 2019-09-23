import { css } from '@emotion/core'
import { readableColor } from 'polished'
import colors from '../../Colors'

const card = css`
  display: inline-block;
  margin: 5px;
  padding: 0;
  position: relative;
  width: 250px;
`

const base = css`
  background: white;
  color: black;
  left: 0;
  padding: 10px;
  position: absolute;
  text-align: center;
  width: 100%;
`

const title = color => css`
  ${base};
`

const colorStrip = (name, weight) => {
  const hexColor = colors.withWeight(name, weight)
  return css`
    border: none;
    padding: 1em;
    background: ${hexColor};
    color: ${readableColor(hexColor)};
  `
}

export {
  card,
  title,
  colorStrip
}
