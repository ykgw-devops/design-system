import { css } from 'emotion'
import colors from '../../colors.jsx'

// TODO probably not a good idea for each component?
import '../../global.jsx'

const base = css`
  display: block;

  input, label {
    display: block;
  }

  label {
    color: ${colors.CARBON};
  }

  input {
    width: 100%;
  }

  fieldset {
    border: none;
    padding: 0;
  }

  &:focus {
    color: red;
  }

  fieldset {
    margin: 15px 0;
  }

  button {
    margin-right: 8px;
  }
`

export { base }
