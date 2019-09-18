import colors, { carbon, concrete } from '../../Colors'
import { css } from '@emotion/core'

const base = css`
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  font-size: 1rem;

  thead > tr > th {
    font-weight: 500;
    padding: 0.875em 0.875em;
    border-bottom: solid 1px ${colors.withWeight(carbon, 200)};
  }

  tbody > tr {
    &:hover {
      background-color: ${colors.withWeight(concrete, 100)};
    }
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
    overflow: visible;
  }
`

export { base, fixed }
