import { css } from '@emotion/core'
import colors, { carbon, concrete, clearSky } from '../../Colors'
import { resetAnchor } from '../../Shared'

const ACTIVE_COLOR = clearSky

const active = css`
  color: ${ACTIVE_COLOR};
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
  user-select: none;

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
    color: ${props => (
      props.active ? ACTIVE_COLOR : colors.withWeight(carbon, 900)
    )};
    background: ${colors.withWeight(concrete, 100)};
  }
`

const nonInteractive = css`
  cursor: default;
  user-select: auto;

  &:hover {
    color: inherit;
    background: inherit;
  }
`

const divider = css`
  padding: 0;
  height: 1px;
  width: 100%;
  border: none;
  border-top: solid 1px ${concrete};
`

export { base, item, active, interactive, divider, nonInteractive }
