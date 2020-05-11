import { css } from '@emotion/core'

const base = css`
  margin: 10px 0;
`

const inline = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    margin: 0 0.5rem;
    flex-shrink: 0;
  }

  label, input {
    display: inline;
  }
`

export { base, inline }
