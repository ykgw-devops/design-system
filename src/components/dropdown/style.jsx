import { css } from '../../emotion'
import colors from '../../colors'

// TODO probably not a good idea for each component?
import '../../global.jsx'

const base = css`
  color: ${colors.CARBON};
  width: auto;
  border: 1px solid ${colors.CONCRETE};
  border-radius: 4px;

  user-select: none;

  // &:after {
  //   content: '';
  //   position: relative;
  //   float: right;
  //   bottom: 2em;
  //   right: 0.5em;

  //   width: 0;
  //   height: 0;
  //   border-top: 20px solid #333;
  //   border-left: 20px solid transparent;
  //   border-right: 20px solid transparent;
  // }
`

const item = css`
  padding: 0.5em 0.8em;

  &:first-child:after {
    content: '';
    position: relative;
    float: right;
    top: 0.6em;
    right: 0.4em;

    width: 0;
    height: 0;
    border-top: 5px solid #333;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  &:hover {
    background-color: ${colors.ANTI_FLASH_WHITE};
  }

  &:first-child:hover {
    background-color: inherit;
  }
`

export { base, item }
