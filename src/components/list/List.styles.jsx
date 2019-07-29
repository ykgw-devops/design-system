import { css } from '@emotion/core'
import { clearSky } from '../../Colors'
import { resetAnchor } from '../../shared'

const base = css`
  ul {
    display: inline-block;
    list-style-type: none;
    line-height: 2.25em;

    padding: 0;
    margin: 0;
  }
`

const active = css`
  color: ${clearSky};
`

const item = css`
  word-wrap: break-word;
  word-break: break-all;

  > a {
    ${resetAnchor};
  }

  > a:hover {
    ${active};
  }
`

export { base, item, active }
