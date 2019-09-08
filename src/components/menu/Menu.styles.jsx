
import { css } from '@emotion/core'
import { carbon, concrete, clearSky } from '../../Colors'
import { resetAnchor } from '../../Shared'

const base = css`
  display: inline-block;
  font-size: 1em;
`

const header = css`
  color: ${carbon};
  font-size: 0.75em;
  text-transform: uppercase;
  padding: 0.75em 0;
`

const listItem = props => css`
  padding: 0.35em 0.75em;
  display: block;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border-radius: 0.15em;
    background: ${concrete};
  }

  ${props.active && activeListItem}
`

const activeListItem = css`
  background: ${clearSky} !important;
  border-radius: 0.2em;
  color: white;
`

const list = css`
  > nav {
    border-left: solid 2px ${concrete};
    padding: 0 0.75em;
    margin: 0.5em 0;
  }
`

export {
  base,
  header,
  list,
  listItem
}
