import { css } from '../../emotion'
import colors from '../../colors'
import { ellipsis } from 'polished'

const padding = '0.5em 1.25em'
const border = `1px solid ${colors.CONCRETE}`

const base = css`
  color: ${colors.INK};

  position: relative;
  display: inline-block;

  user-select: none;
`

const item = css`
  display: block;
  width: 100%;
  padding: ${padding};

  color: ${colors.INK};

  white-space: nowrap;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${colors.ANTI_FLASH_WHITE};
  }
`

const menuWrapper = css`
  display: block;
  position: absolute;
  padding: 0.25em 0;

  left: 0;

  z-index: 1000;
  float: left;

  min-width: 100%;
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

  border: ${border};
  border-radius: 4px;

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

const activeItem = css`
  color: ${colors.CLEAR_SKY};
  background: ${colors.ANTI_FLASH_WHITE};
`

export { base, item, menuWrapper, activeItem, selectedItem }
