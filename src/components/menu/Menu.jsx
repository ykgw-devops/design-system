/** @jsx jsx */
import styled from '@emotion/styled'
import { setDisplayName } from 'recompose'

import { base, header, list, listItem } from './Menu.styles.jsx'

const Menu = styled.nav(base)
const MenuHeader = styled.header(header)
const MenuList = styled.nav(list)
const ListItem = styled.div(listItem)

Menu.Header = setDisplayName('Menu.Header')(MenuHeader)
Menu.List = setDisplayName('Menu.List')(MenuList)
Menu.Item = setDisplayName('Menu.Item')(ListItem)

export default Menu
