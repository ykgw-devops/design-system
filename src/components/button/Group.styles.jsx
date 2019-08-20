import { css } from '@emotion/core'

const base = css`
  display: flex;

  button, a {
    border-radius: 0;
    flex-grow: 1;

    // Overwrite form button margin
    margin: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button:first-child, a:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button:last-child, a:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export { base }
