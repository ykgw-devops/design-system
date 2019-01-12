import { css } from '@emotion/core'
import colors from '../../colors'

const base = css`
  display: block;

  input, label {
    display: block;
  }

  label {
    color: ${colors.CARBON};
  }

  &:focus {
    color: red;
  }

  button {
    margin-right: 8px;
  }
`

export { base }
