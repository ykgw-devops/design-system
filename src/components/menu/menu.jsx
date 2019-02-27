import React from 'react'
import { cx } from '../../emotion'
import { setDisplayName } from 'recompose'

import { base, header, list, listItem } from './menu.styles.jsx'

const Menu = (props) => (
  <nav className={base}>
    {props.children}
  </nav>
)

const MenuHeader = (props) => (
  <header className={header}>{props.children}</header>
)

const MenuList = (props) => (
  <nav className={list}>{props.children}</nav>
)

const ListItem = (props) => (
  <div className={cx(listItem(props))}>
    {props.children}
  </div>
)

Menu.Header = setDisplayName('Menu.Header')(MenuHeader)
Menu.List = setDisplayName('Menu.List')(MenuList)
Menu.Item = setDisplayName('Menu.Item')(ListItem)

export default Menu
