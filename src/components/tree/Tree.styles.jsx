import { css } from '@emotion/core'
import { carbon, clearSky } from '../../Colors'

const base = css`
  word-break: break-all;
  font-size: 1rem;

  color: ${carbon};
  list-style-type: none;

  user-select: none;
  padding-left: 0;
`

const listItem = css`
  padding: 0.1em 0;
  cursor: pointer;
`

const collapsed = css`
  height: 0;
  overflow: hidden;
`
const indented = css`
  padding-left: 1.2em;

  /*
   * WTF chrome... ¯\_(ツ)_/¯
   * This prevents the tree component from building a piramide with
   * the top-level items.
   */
  padding-top: 1px;
`

const icon = css`
  float: left;
  color: ${clearSky};

  font-weight: 600;
  font-size: 1.2em;
  line-height: 1.2em;

  padding-right: 1px;
`

export {
  base,
  collapsed,
  listItem,
  indented,
  icon
}
