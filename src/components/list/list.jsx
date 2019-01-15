import React from 'react'
import { pick } from 'lodash'
import { base, item, active as activeStyle } from './list.styles.jsx'
import { cx } from '../../emotion'
import { setDisplayName } from 'recompose'

const List = (props) => (
  <div className={cx(base, props.className)}>
    <ul>
      {props.children}
    </ul>
  </div>
)

const Item = (props) => {
  const rest = pick(props, ['onClick'])
  return (
    <li className={cx(item, props.active && activeStyle, props.className)} {...rest}>
      {props.children}
    </li>
  )
}

// we need this so we can have readable component names in the React dev tools
List.Item = setDisplayName('List.Item')(Item)

export default List
