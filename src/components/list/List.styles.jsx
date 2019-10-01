import { css } from '@emotion/core'
import colors, { concrete, clearSky } from '../../Colors'
import { resetAnchor } from '../../Shared'

const active = css`
  color: ${clearSky};
`

const base = css`
  display: inline-flex;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.5em;

  a {
    ${resetAnchor};
  }

  a:hover {
    ${active};
  }
`

const item = css`
  word-wrap: break-word;
  word-break: break-all;

  display: inline-flex;
  align-items: center;
  white-space: pre;

  padding: 0.65em 1em;
  cursor: pointer;
`

const interactive = css`
  display: flex;
  flex-direction: column;

  > div:hover {
    background: ${colors.withWeight(concrete, 100)};
  }
`

export { base, item, active, interactive }
