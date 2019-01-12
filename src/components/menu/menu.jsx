/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { base, item, active as activeStyle } from './menu.styles.jsx'
import setDisplayName from 'recompose/setDisplayName'

const Menu = (props) => (
  <nav css={base}>
    <ul>
      {props.children}
    </ul>
  </nav>
)

const Item = (props) => (
  <li css={[item, props.active && activeStyle]}>
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
