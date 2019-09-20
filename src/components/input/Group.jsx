import styled from '@emotion/styled'
import colors, { concrete } from '../../Colors'

import Button from '../button/Button'

const borderColor = colors.withWeight(concrete, 500)

const Group = styled.div`
  display: inline-flex;
  align-items: center;

  border: solid 1px ${borderColor};
  border-radius: 4px;

  background: white;

  ${Button} {
    border-top: none;
    border-bottom: none;
    border-right: none;

    border-color: ${borderColor};
    border-radius: 0;
  }

  > *:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export default Group
