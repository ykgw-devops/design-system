import { css } from '@emotion/core'
import colors, { concrete, clearSky } from '../../Colors'
import { resetAnchor } from '../../Shared'

const active = css`
  color: ${clearSky};
`

const base = css`
  font-size: 1rem;
  line-height: 1.5em;

  ul {
    margin: 0;
    padding: 0;

    display: inline-block;
    list-style-type: none;
  }

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

  display: block;

  padding: 0.65em 1em;
  cursor: pointer;
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
