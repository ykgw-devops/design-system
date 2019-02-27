import { css } from '../../emotion'
import { carbon, concrete, clearSky } from '../../colors'

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
  padding: 0.25em 0.75em;

  ${props.active && activeListItem}
  &:hover {
    cursor: pointer;
    ${activeListItem}
  }
`

const activeListItem = css`
  background: ${clearSky};
  border-radius: 0.15em;
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
