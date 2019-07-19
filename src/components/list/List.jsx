/** @jsx jsx */
import { omit } from 'lodash'
import { base, item, active as activeStyle } from './List.styles.jsx'
import { jsx } from '@emotion/core'
import { setDisplayName } from 'recompose'

const List = (props) => (
  <div css={base} className={props.className}>
    <ul>
      {props.children}
    </ul>
  </div>
)

const Item = (props) => {
  const rest = omit(props, ['active', 'className', 'children'])
  return (
    <li css={[item, props.active && activeStyle]} className={props.className} {...rest}>
      {props.children}
    </li>
  )
}

// we need this so we can have readable component names in the React dev tools
List.Item = setDisplayName('List.Item')(Item)

export default List
