import { css } from '../../emotion'
import { carbon, clearSky } from '../../colors'

const base = css`
  font-size: 1rem;

  color: ${carbon};
  list-style-type: none;

  user-select: none;
`

const withChildren = css`
  &:before {
    color: ${clearSky};
    font-family: 'Material Icons';
    content: 'keyboard_arrow_down';
    float: left;

    padding-right: 0.2em;
  }
`

const listItem = css`
  padding: 0.1em 0;
`

export {
  base,
  listItem,
  withChildren
}
