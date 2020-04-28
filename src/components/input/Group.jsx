import styled from '@emotion/styled'
import colors, { concrete } from '../../Colors'

const borderColor = colors.withWeight(concrete, 500)

const Group = styled.div`
  display: inline-flex;
  vertical-align: middle;

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

  input + button, button + button {
    border-left: none;
  }

  button + input {
    border-left: none;
  }

  button {
    border-radius: 0;
    background: ${colors.withWeight(concrete, 200)};

    color: inherit;
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
