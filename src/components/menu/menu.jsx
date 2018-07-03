import React from 'react'
import { base, item, active as activeStyle } from './style.jsx'
import { cx } from '../../emotion'

const Menu = (props) => (
  <ul className={cx(base)}>
    {props.children}
  </ul>
)

Menu.Item = (props) => (
  <li className={cx(item, props.active && activeStyle)}>
    {/* wrap child with an anchor tag when "href" prop is truthy */}
    {props.children.map(child => {
      return Boolean(props.href)
        ? wrapAnchor(child, { href: props.href })
        : child
    })}
  </li>
)

function wrapAnchor (child, props) {
  return <a {...props}>{child}</a>
}


export default Menu
