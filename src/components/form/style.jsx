import { css } from '../../emotion'
import colors from '../../colors'
import { base as Input } from '../input/input.styles'

const base = css`
  display: block;

  input, label {
    display: block;
  }

  label {
    color: ${colors.CARBON};
  }

  .${Input} {
    display: flex;
  }

  &:focus {
    color: red;
  }

  button {
    margin-right: 8px;
  }
`

export { base }
