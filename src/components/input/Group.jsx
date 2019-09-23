import styled from '@emotion/styled'
import colors, { concrete } from '../../Colors'

import Button from '../button/Button'

const borderColor = colors.withWeight(concrete, 500)

const Group = styled.div`
  display: inline-block;

  border-radius: 0.333333rem;
  background: white;

  > * {
    box-sizing: border-box;
    font-size: 1rem;
    padding: 0 0.85rem;
    line-height: 1rem;
    height: 2.4rem;

    display: inline-block;
    vertical-align: middle;
  }

  input {
    border: solid 1px ${borderColor};
    margin: 0;
  }

  input + ${Button}, ${Button} + ${Button} {
    border-left: none;
  }

  ${Button} + input {
    border-left: none;
  }

  ${Button} {
    border-radius: 0;

    color: inherit;
    background: ${colors.withWeight(concrete, 200)};
    border: solid 1px ${colors.withWeight(concrete, 500)};

    &:hover {
      background: ${colors.withWeight(concrete, 400)};
    }
  }

  > *:first-child {
    border-top-left-radius: 0.333333rem;
    border-bottom-left-radius: 0.333333rem;
  }

  > *:last-child {
    border-top-right-radius: 0.333333rem;
    border-bottom-right-radius: 0.333333rem;
  }
`

export default Group
