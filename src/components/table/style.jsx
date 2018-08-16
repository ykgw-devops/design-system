import colors from '../../colors'
import { css } from '../../emotion'
import { tint, darken } from 'polished'

// TODO probably not a good idea for each component?
import '../../global.jsx'

const base = css`
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;

  thead {
    color: ${colors.INK};
  }

  thead > tr > th {
    font-weight: 500;
    padding: 0.875em 0.875em;
    border-bottom: solid 1px ${darken(0.1, colors.CONCRETE)};
  }

  tbody > tr {
    &:hover {
      background-color: ${tint(0.35, colors.ANTI_FLASH_WHITE)};
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
    border-bottom: solid 1px ${colors.CONCRETE};
  }
`

export { base }
