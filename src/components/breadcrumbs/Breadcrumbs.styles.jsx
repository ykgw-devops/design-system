import { css } from '@emotion/core'
import colors, { clearSky, concrete } from '../../Colors.jsx'

const base = css`
  line-height: 1.5rem;
`

const item = css`
  list-style: none;
  display: inline-block;

  a {
    color: ${clearSky};
  }

  a:hover {
    text-decoration: underline;
  }

  :after {
    color: ${colors.withWeight(concrete, 600)};
    font-size: 1.2rem;
    content: '›';
    padding: 0 8px;
  }

  &:last-child:after {
    content: '';
  }
`

export { base, item }
