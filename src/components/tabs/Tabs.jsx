import styled from '@emotion/styled'
import { css } from '@emotion/core'

import colors, { carbon, concrete } from '../../Colors'
import Button from '../button/Button'

const Group = styled.div`
  background: ${colors.withWeight(concrete, 200)};
  border-radius: 4px;
  padding: 0.5em;
  border: solid 1px ${concrete};
`

const Item = styled(Button)`
  display: inline-block;
  border: none;
  background: none;
  color: ${carbon};

  &:hover {
    background: none;
  }

  ${props => props.active && (css`
    background: white;
    color: ${colors.withWeight(carbon, 700)};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    &:hover {
      background: white;
    }
  `)}
`

const Tabs = {}
Tabs.Group = Group
Tabs.Item = Item

export default Tabs
