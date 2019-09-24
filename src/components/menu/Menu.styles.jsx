
import { css } from '@emotion/core'
import { carbon, concrete, clearSky } from '../../Colors'
import { resetAnchor } from '../../Shared'

const base = css`
  display: inline-block;
  font-size: 1rem;
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

  /* Menu Item can be rendered as an <a> tag */
  ${resetAnchor};

  span {
    vertical-align: middle;
  }

  &:hover {
    cursor: pointer;
    border-radius: 0.15em;
    background: ${concrete};
  }

  /* Compatibility with React-Router active className */
  &.active {
    ${activeListItem};
  }
  ${props.active && activeListItem};
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
