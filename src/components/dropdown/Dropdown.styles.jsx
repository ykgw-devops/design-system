import { css } from '@emotion/core'
import colors, { carbon, concrete, clearSky } from '../../Colors'
import { resetAnchor, ellipsifyText } from '../../Shared'

const contentPadding = '0.25em 0.5em'
const border = `1px solid ${concrete}`

const lightGrey = colors.withWeight(concrete, 300)

const base = css`
  color: black;

  min-width: 14em;

  position: relative;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
`

const compact = css`
  min-width: auto;
`

const fluid = css`
  min-width: auto;
  width: 100%;
`

const item = css`
  display: block;
  padding: ${contentPadding};
  border-radius: 0.2em;

  ${ellipsifyText}

  color: black;

  background: none;
  border: none;
  cursor: pointer;

  a {
    ${resetAnchor}
  }

  &:hover {
    background-color: ${lightGrey};
  }
`

const menuWrapper = css`
  display: none;
  position: absolute;
  padding: 0.35em;

  left: 0;
  z-index: 1000;

  max-height: 450px;

  text-align: left;
  list-style: none;

  background-color: #FFF;

  overflow-y: scroll;

  border: ${border};
  border-radius: 0.333333rem;
`
const selectedItem = css`
  ${item};
  margin: 0;

  display: flex;
  justify-content: space-between;
  width: 100%;

  border: ${border};
  border-radius: 0.333333rem;

  ${ellipsifyText}

  /* dropdown triangular icon */
  &:after {
    content: '';
    position: relative;
    float: right;

    top: 0.6em;
    right: 0.4em;

    width: 0;
    height: 0;

    border-top: 5px solid #333;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`

const selected = content => css`
  ${ellipsifyText};

  color: ${content ? 'inherit' : concrete};
`

const activeBgColor = colors.withWeight(clearSky, 200)
const activeItem = css`
  color: ${clearSky};
  background: ${activeBgColor};

  &:hover {
    background: ${activeBgColor};
  }
`

const grouped = css`
  ${item};
  margin: 0;
  padding: 0.5em 0.4em;
  text-indent: 0.25em;
  cursor: inherit;

  font-size: 0.9em;
  font-weight: 600;
  color: ${colors.withWeight(carbon, 600)};

  &:hover {
    background: none;
  }
`

const disabled = css`
  cursor: default;
  user-select: none;
  opacity: 0.50;

  &:hover {
    background: inherit;
  }
`

export { base, compact, fluid, item, menuWrapper, activeItem, selectedItem, grouped, selected, disabled }
