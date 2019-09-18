import { css } from '@emotion/core'
import colors, { carbon, concrete } from '../../Colors'

const base = css`
  display: inline-flex;
  align-items: center;
  border-bottom: solid 1px ${concrete};
  font-size: 1rem;
  margin: 5px 0;

  input { flex: 1; }
`

const input = css`
  -webkit-appearance: none;
  background: none;
  border: none;
  padding: 0.5em 0em;
  color: ${carbon};

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

const adornments = css`
  font-weight: 300;
  color: ${colors.withWeight(carbon, 500)};

  /* an icon in the input */
  .i {
    font-size: 1.5em;
  }
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

const fluidStyle = css`
  width: 100%;
`

export { base, input, leftAdornments, rightAdornments, fluidStyle }
