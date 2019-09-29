import React from 'react'
import styled from '@emotion/styled'
import { setDisplayName } from 'recompose'

import { base, item, active as activeStyle, interactive } from './List.styles.jsx'

const ListContainer = styled.div`
  ${base};
  ${props => props.interactive && interactive};
`

const List = (props) => (
  <ListContainer {...props}>
    {props.children}
  </ListContainer>
)

const Item = styled.div(props => (
  [item, props.active && activeStyle]
))

List.Item = setDisplayName('List.Item')(Item)

export default List
