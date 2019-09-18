import { css } from '@emotion/core'
import { carbon } from '../../Colors'

const base = css`
  display: block;

  input, label {
    display: block;
  }

  label {
    color: ${carbon};
  }

  &:focus {
    color: red;
  }

  button {
    margin-right: 8px;
  }
`

export { base }
