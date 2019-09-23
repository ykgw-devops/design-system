import { css } from '@emotion/core'

const base = props => css`
  display: flex;

  button, a {
    border-radius: 0;
    flex: 0 0 auto;
    display: inline-block;

    ${props.fluid && css`flex: 1 0 auto;`}
    ${props.equalWidth && css`flex: 1;`}

    /* Overwrite from button margin */
    margin: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button:first-of-type, a:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button:last-of-type, a:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export { base }
