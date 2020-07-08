import { css } from '@emotion/core'

import { IButtonGroupProps } from './Group'

const base = (props: IButtonGroupProps) => css`
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
    border-right-width: 0;
  }

  button:first-child, a:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button:last-child, a:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right-width: 1px;
  }
`

export { base }
