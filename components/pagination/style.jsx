import { css } from 'react-emotion'
import colors from '../../colors'

const base = css`
  border: solid 1px ${colors.CONCRETE};
  color: ${colors.CARBON};
  font-size: 0.875rem;
  width: auto;
  display: inline-block;
  border-radius: 4px;

  & > a { color: ${colors.CLEAR_SKY}; }
`

const item = css`
  color: ${colors.CARBON};
  display: inline-block;
  padding: 0.825em 1em;
  line-height: 1em;

  border-right: solid 1px ${colors.CONCRETE};
`

const firstItem = css`
  ${item};
  color: ${colors.CARBON};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

const lastItem = css`
  ${item};
  color: ${colors.CARBON};

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  border-right: none;
`

const activeItem = css`
  background-color: ${colors.CLEAR_SKY};
  color: ${colors.ANTI_FLASH_WHITE} !important;
  font-weight: 500;
`

const disabled = css`
  color: ${colors.CARBON} !important;
  background-color: ${colors.ANTI_FLASH_WHITE};
`

export default { activeItem, base, disabled, item, firstItem, lastItem }
