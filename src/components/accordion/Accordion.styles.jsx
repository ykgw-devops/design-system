import { fontFamily } from '../../Typography'
import { css } from '@emotion/core'
import sizes from '../../sizes'
import { carbon, ink } from '../../Colors'

const base = css`
  font-family: ${fontFamily};
  color: ${ink};

  & .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: -20px;
  }

  & .title {
    display: inline-block;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    padding-left: 25px;
  }

  & p {
    margin: 0px;
  }

  & details {
    padding: 5px;
  }

  & summary {
    display: flex;
    align-items: center;
    width: 100%;
  }

  & summary:focus {
    outline: none;
  }

  & i {
    cursor: pointer;
    margin-right: 10px;
  }
`

const styled = `
  border-radius: 4px;
  border: 1px solid ${carbon};

  & .title {
    margin-left: 0px;
  }

  & details {
    padding-left: 20px;
    border-bottom: 1px solid ${carbon};
  }

  & details:last-child {
    border-bottom: none;
  }

  & details .title {
    color: ${carbon};
    transition: color 0.2s ease-in;
  }

  & details .title:hover {
    color: ${ink};
  }

  & details summary:focus {
    color: ${ink};
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
  size,
  kind
}
