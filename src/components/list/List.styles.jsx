import { css } from '@emotion/core'
import colors, { concrete, clearSky } from '../../Colors'
import { resetAnchor } from '../../Shared'

const base = css`
  font-size: 1rem;

  ul {
    display: inline-block;
    list-style-type: none;
    line-height: 1em;

    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.65em 1em;
    cursor: pointer;
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

const interactive = css`
  display: flex;
  flex-direction: column;

  li {
    display: block;
  }

  li:hover {
    background: ${colors.withWeight(concrete, 100)};
  }
`

export { base, item, active, interactive }
