
import { setDisplayName } from 'recompose'

import { base, header, list, listItem } from './Menu.styles.jsx'

const Menu = (props) => (
  <nav css={base}>
    {props.children}
  </nav>
)

const MenuHeader = (props) => (
  <header css={header}>{props.children}</header>
)

const MenuList = (props) => (
  <nav css={list}>{props.children}</nav>
)

const ListItem = (props) => (
  <div css={listItem(props)}>
    {props.children}
  </div>
)

Menu.Header = setDisplayName('Menu.Header')(MenuHeader)
Menu.List = setDisplayName('Menu.List')(MenuList)
Menu.Item = setDisplayName('Menu.Item')(ListItem)

export default Menu
