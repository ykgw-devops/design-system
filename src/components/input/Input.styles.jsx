import { css } from '@emotion/core'
import colors, { carbon } from '../../Colors'

const base = css`
  display: inline-flex;
  align-items: center;
  padding: 0 0.5em;

  input { flex: 1; }
`

const input = css`
  -webkit-appearance: none;
  background: none;
  border: none;
  color: ${carbon};
  padding: 0 0.25em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &::placeholder {
    color: ${colors.withWeight(carbon, 300)};
    font-weight: 300;
  }
`

const fluidStyle = css`
  width: 100%;
`

export { base, input, fluidStyle }
