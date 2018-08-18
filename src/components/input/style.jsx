import { css } from '../../emotion'
import colors from '../../colors'
import { darken } from 'polished'

const base = css`
  display: inline-flex;
  align-items: center;

  border-bottom: solid 1px ${colors.CONCRETE};
  font-size: 1rem;
  margin: 5px 0;

  input { flex: 1; }
`

const input = css`
  -webkit-appearance: none;
  background: none;
  border: none;
  padding: 0.5em 0em;
  color: ${colors.CARBON};

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &::placeholder {
    color: ${darken(0.1, colors.CONCRETE)};
    font-weight: 300;
  }
`

const adornments = css`
  font-weight: 300;
  color: ${darken(0.2, colors.CONCRETE)};
`

const leftAdornments = css`
  ${adornments}

  &, > * {
    margin-right: 0.25em;
  }
`

const rightAdornments = css`
  ${adornments}

  > * {
    margin-left: 0.25em;
  }
`

export { base, input, leftAdornments, rightAdornments }
