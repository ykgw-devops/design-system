import { css } from '@emotion/core'

/* reset anchor defaults */
const resetAnchor = css`
  color: inherit;
  text-decoration: none;
`

const ellipsifyText = css`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`

export {
  ellipsifyText,
  resetAnchor
}
