import { css } from '@emotion/core'
import { antiFlashWhite, carbon, clearSky, concrete } from '../../Colors'
import { shade, tint } from 'polished'
import { resetAnchor } from '../../Shared'

const lightGrey = tint(0.5, antiFlashWhite)
const darkerGrey = shade(0.75, antiFlashWhite)

const base = css`
  color: ${carbon};
  font-size: 1rem;
  width: auto;
  display: inline-block;
  border-radius: 4px;

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
  color: ${antiFlashWhite} !important;
  font-weight: 500;

  border-color: ${clearSky};
`

const disabled = css`
  color: ${darkerGrey} !important;
  background-color: ${lightGrey};

  cursor: default;
`

export default { activeItem, base, disabled, item, firstItem, lastItem }
