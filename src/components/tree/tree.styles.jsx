import { css } from '../../emotion'
import { carbon, clearSky } from '../../colors'

const base = css`
  font-size: 1rem;

  color: ${carbon};
  list-style-type: none;

  user-select: none;
  padding-left: 0;
`

const withChildren = ({ collapsed }) => {
  const icon = collapsed
    ? 'keyboard_arrow_right'
    : 'keyboard_arrow_down'

  return css`
    &:before {
      float: left;
      color: ${clearSky};

      font-family: 'Material Icons';
      font-weight: 600;
      font-size: 1.2em;
      line-height: 1.2em;

      content: '${icon}';
    }
  `
}

const listItem = css`
  padding: 0.1em 0;
`

const collapsed = css`
  height: 0;
  overflow: hidden;
`
const indented = css`
  padding-left: 1.2em;
  cursor: pointer;

  /*
   * WTF chrome... ¯\_(ツ)_/¯
   * This prevents the tree component from building a piramide with
   * the top-level items.
   */
  padding-top: 1px;
`

export {
  base,
  collapsed,
  listItem,
  indented,
  withChildren
}
