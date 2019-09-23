import { css } from '@emotion/core'
import colors, { carbon, clearSky, concrete } from '../../Colors'
import { resetAnchor } from '../../Shared'

const lightGrey = colors.withWeight(concrete, 100)
const darkerGrey = colors.withWeight(carbon, 200)

const base = css`
  color: ${carbon};
  font-size: 1rem;
  width: auto;
  display: inline-block;
  border-radius: 0.333333rem;

  & > a {
    ${resetAnchor};
    color: ${clearSky};
  }
`

const borderStyle = `solid 1px ${concrete}`

const item = css`
  color: ${carbon};
  display: inline-block;
  padding: 0.825em 1em;
  line-height: 1em;

  border-top: ${borderStyle};
  border-bottom: ${borderStyle};
  border-right: ${borderStyle};

  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${lightGrey};
  }
`

const firstItem = css`
  ${item};
  color: ${carbon};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-left: ${borderStyle};

  user-select: none;
`

const lastItem = css`
  ${item};
  color: ${carbon};

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-right: ${borderStyle};
`

const activeItem = css`
  background-color: ${clearSky} !important;
  color: ${colors.withWeight(concrete, 200)} !important;
  font-weight: 500;

  border-color: ${clearSky};
`

const disabled = css`
  color: ${darkerGrey} !important;
  background-color: ${lightGrey};

  cursor: default;
`

export default { activeItem, base, disabled, item, firstItem, lastItem }
