import { antiFlashWhite, concrete, ink } from '../../Colors'
import { css } from '@emotion/core'
import { tint, darken } from 'polished'

const base = css`
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  font-size: 1rem;

  thead {
    color: ${ink};
  }

  thead > tr > th {
    font-weight: 500;
    padding: 0.875em 0.875em;
    border-bottom: solid 1px ${darken(0.1, concrete)};
  }

  tbody > tr {
    &:hover {
      background-color: ${tint(0.35, antiFlashWhite)};
    }
  }

  tbody tr:first-child > td {
    padding-top: 15px;
  }

  tbody tr:last-child > td {
    border-bottom: none;
  }

  tbody > tr > td {
    padding: 0.825em 0.825em;
    border-bottom: solid 1px ${concrete};
  }
`

const fixed = css`
  table-layout:fixed;
  width: 100%;

  td {
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: normal;
    overflow: hidden;
  }
`

export { base, fixed }
