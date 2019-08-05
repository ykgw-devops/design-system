import { css } from '@emotion/core'
import { tint, shade } from 'polished'
import { antiFlashWhite, carbon, concrete, clearSky, ink } from '../../Colors'
import { resetAnchor, ellipsifyText } from '../../shared'

const padding = '0.5em 1.25em'
const border = `1px solid ${concrete}`

const lightGrey = tint(0.5, antiFlashWhite)
const darkerGrey = shade(0.75, antiFlashWhite)

const base = css`
  color: ${ink};

  position: relative;
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  user-select: none;
`

const item = css`
  display: block;
  padding: ${padding};

  ${ellipsifyText}

  color: ${ink};

  background: none;
  border: none;
  cursor: pointer;

  a {
    ${resetAnchor}
  }

  &:hover {
    background-color: ${antiFlashWhite};
  }
`

const menuWrapper = css`
  display: none;
  position: absolute;

  width: 100%;

  left: 0;

  z-index: 1000;
  float: left;

  max-height: 450px;

  margin: .125rem 0 0;

  text-align: left;
  list-style: none;

  background-color: #FFF;

  overflow-y: scroll;

  border: ${border};
  border-radius: 4px;
`
const selectedItem = css`
  ${item};

  display: flex;
  justify-content: space-between;
  width: 100%;

  border: ${border};
  border-radius: 4px;

  ${ellipsifyText}

  /* dropdown triangular icon */
  &:after {
    content: '';
    position: relative;
    float: right;

    top: 0.6em;
    right: -0.2em; /* TODO: find a better way to fix this? */

    width: 0;
    height: 0;

    border-top: 5px solid #333;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`

const selected = css`
  width: 90%;
  ${ellipsifyText}
`

const activeItem = css`
  color: ${clearSky};
  background: ${antiFlashWhite};
`

const grouped = css`
  display: block;
  color: ${carbon};

  ${ellipsifyText}

  padding: ${padding};

  background: ${lightGrey};
  text-indent: -10px;
  border-top: 1px solid ${concrete};
  border-bottom: 1px solid ${concrete};
`

const disabled = css`
    cursor: default;
    user-select: none;
    opacity: 0.50;

    &:hover {
      background: inherit;
    }
`

export { base, item, menuWrapper, activeItem, selectedItem, grouped, selected, disabled }
