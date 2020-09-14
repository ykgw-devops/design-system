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

  [class*=-Group] button { margin-right: 0; }

  button {
    margin-right: 8px;
  }
`

export { base }
