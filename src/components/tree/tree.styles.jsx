import { css } from '../../emotion'
import { ink, clearSky } from '../../colors'

const base = css`
  color: ${ink};
  list-style-type: none;
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

export {
  base,
  withChildren
}
