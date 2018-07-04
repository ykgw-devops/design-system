import React from 'react'
import { base, item, active as activeStyle } from './style.jsx'
import { cx } from '../../emotion'
import { setDisplayName } from 'recompose'

const Menu = (props) => (
  <ul className={cx(base)}>
    {props.children}
  </ul>
)

const Item = (props) => (
  <li className={cx(item, props.active && activeStyle)}>
    {/* wrap child with an anchor tag when "href" prop is truthy */}
    {props.href
      ? wrapAnchor(props.children, { href: props.href })
      : props.children
    }
  </li>
)

function wrapAnchor (child, props) {
  return <a {...props}>{child}</a>
}

// we need this so we can have readable component names in the React dev tools
Menu.Item = setDisplayName('Menu.Item')(Item)

export default Menu
