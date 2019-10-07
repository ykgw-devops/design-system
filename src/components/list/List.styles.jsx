import { css } from '@emotion/core'
import colors, { carbon, concrete, clearSky } from '../../Colors'
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

  > *:hover {
    color: ${colors.withWeight(carbon, 900)};
    background: ${colors.withWeight(concrete, 100)};
  }
`

const divider = css`
  cursor: default;
  padding-top: 0;
  padding-bottom: 0;

  > hr {
    width: 100%;
    border: none;
    border-top: solid 1px ${concrete};
  }

  &:hover {
    background: inherit;
  }
`

export { base, item, active, interactive, divider }
