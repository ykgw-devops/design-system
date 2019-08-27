import { darken } from 'polished'

import { css } from '@emotion/core'
import { carbon, concrete } from '../../Colors'
import { base as Icon } from '../icon/Style'

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

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &::placeholder {
    color: ${darken(0.1, concrete)};
    font-weight: 300;
  }
`

const adornments = css`
  font-weight: 300;
  color: ${darken(0.2, concrete)};

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

export { base, input, leftAdornments, rightAdornments }
