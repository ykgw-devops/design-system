import colors from '../../colors'
import { css } from '../../emotion'
import { shade } from 'polished'

const base = css`
  color: ${colors.INK};
  line-height: 1.5rem;

  ol {
    padding: 0;
  }

  li {
    list-style: none;
    display: inline-block;

    a {
      color: ${colors.CLEAR_SKY};
    }

    a:hover {
      text-decoration: underline;
    }

    :after {
      color: ${shade(0.85, colors.CONCRETE)};
      font-size: 1.2rem;
      content: '›';
      padding: 0 8px;
    }

    &:last-child:after {
      content: '';
    }
  }
`

export { base }
