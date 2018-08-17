import { css } from '../../emotion'
import colors from '../../colors'
import { shade, tint } from 'polished'
import { resetAnchor } from '../../global'

const lightGrey = tint(0.5, colors.ANTI_FLASH_WHITE)
const darkerGrey = shade(0.75, colors.ANTI_FLASH_WHITE)

const base = css`
  color: ${colors.CARBON};
  font-size: 1rem;
  width: auto;
  display: inline-block;
  border-radius: 4px;

  & > a {
    ${resetAnchor};
    color: ${colors.CLEAR_SKY};
  }
`

const borderStyle = `solid 1px ${colors.CONCRETE}`

const item = css`
  color: ${colors.CARBON};
  display: inline-block;
  padding: 0.825em 1em;
  line-height: 1em;

  border-top: ${borderStyle};
  border-bottom: ${borderStyle};
  border-right: ${borderStyle};

  &:hover {
    background-color: ${lightGrey};
  }
`

const firstItem = css`
  ${item};
  color: ${colors.CARBON};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-left: ${borderStyle};
`

const lastItem = css`
  ${item};
  color: ${colors.CARBON};

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-right: ${borderStyle};
`

const activeItem = css`
  background-color: ${colors.CLEAR_SKY} !important;
  color: ${colors.ANTI_FLASH_WHITE} !important;
  font-weight: 500;

  border-color: ${colors.CLEAR_SKY};
`

const disabled = css`
  color: ${darkerGrey} !important;
  background-color: ${lightGrey};

  cursor: default;
  user-select: none;
`

export default { activeItem, base, disabled, item, firstItem, lastItem }
