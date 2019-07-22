import { fontFamily } from '../../Typography'
import { css } from '@emotion/core'
import sizes from '../../sizes'
import { carbon, concrete, ink } from '../../Colors'

const borderStyle = `solid 1px ${concrete}`

const base = css`
  font-family: ${fontFamily};
  color: ${ink};

  p {
    margin: 0px;
  }

  details {
    &[open] {
      summary:before {
        content: 'arrow_drop_down';
      }
    }
  }

  summary {
    padding: 0.5em;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:before {
      font-size: 1.25em;
      color: ${carbon};
      line-height: 1em;
      font-family: 'Material Icons';
      content: 'arrow_right';
      display: block;
    }

    /* disable the triangle icon */
    &::-webkit-details-marker {
      display: none;
    }
  }

  summary:focus {
    outline: none;
  }

  & i {
    cursor: pointer;
    padding: 0.25em;
  }
`

const title = css`
  display: inline-block;
  flex: 1;
  color: ${ink};
  padding-left: 0.25em;
`

const content = css`
  padding: .5em 1em 1em;
`

const styled = `
  border-radius: 4px;
  border: ${borderStyle};

  & details {
    border-bottom: ${borderStyle};
  }

  & details:last-child {
    border-bottom: none;
  }
`

const kind = ({ kind = '' }) => {
  switch (kind.toLowerCase()) {
    case 'styled': return styled
    default:
  }
}

const size = ({ size }) => css`font-size: ${sizes[size]};`

export {
  base,
  content,
  title,
  size,
  kind
}
