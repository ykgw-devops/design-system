import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { setDisplayName } from 'recompose'

import { base, item, active as activeStyle, interactive, nonInteractive, divider } from './List.styles.jsx'

const Item = styled.div(props => (
  [item, props.active && activeStyle, props.nonInteractive && nonInteractive]
))

const compact = css`
  ${Item} { padding: 0; }
`

const ListContainer = styled.div`
  ${base};
  ${props => props.interactive && interactive};
  ${props => props.compact && compact};
`

const List = (props) => (
  <ListContainer {...props}>
    {props.children}
  </ListContainer>
)

const Divider = (props) => (
  <Item {...props} nonInteractive css={divider} />
)

List.Item = setDisplayName('List.Item')(Item)
List.Divider = setDisplayName('List.Divider')(Divider)

export default List
