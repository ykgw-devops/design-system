import { css } from '../../emotion'
import { clearSky } from '../../colors'
import { resetAnchor } from '../../shared'

const base = css`
  ul {
    display: inline-block;
    list-style-type: none;
    line-height: 2.25em;

    padding: 0;
    margin: 0;

    li { height: 2.25em; }
  }
`

const item = css`
  a {
    ${resetAnchor};
  }

  &, > *  {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &:hover {
    color: ${clearSky};
  }

  i {
    font-size: 1.3em;
    margin-right: 0.7em;
  }
`

const active = css`
  color: ${clearSky};
`

export { base, item, active }
