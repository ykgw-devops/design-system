import { css } from '@emotion/core'

const base = css`
  margin: 10px 0;
`

const inline = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    flex-shrink: 0;
  }

  label:first-child {
    margin-right: 0.5rem;
  }

  label:last-child {
    margin-left: 0.5rem;
  }

  label, input {
    display: inline;
  }
`

export { base, inline }
