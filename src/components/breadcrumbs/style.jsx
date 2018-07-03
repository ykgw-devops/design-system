import colors from '../../colors'
import { cx, css } from '../../emotion'

// TODO probably not a good idea for each component?
import '../../global.jsx'

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
      color: ${colors.CONCRETE};
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
