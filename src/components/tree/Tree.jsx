/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty, isFunction, omit, isNil } from 'lodash'

import Icon from '../icon/Icon'
import { base, collapsed as collapsedStyle, listItem, indented, icon } from './Tree.styles.jsx'

const Tree = (props) => {
  const { items, onItemClick } = props
  if (isEmpty(items)) return null

  /**
   *  simple recursion to render a tree
   *    within a tree
   *      within a tree
   *        within a tree
   */
  return (
    <div css={base} className={props.className}>
      {
        items.map(item => {
          const key = `tree-item-${item.title}`
          return <TreeItem key={key} {...item} onClick={onItemClick} />
        })
      }
    </div>
  )
}

class TreeItem extends Component {
  constructor (props) {
    super(props)

    const { collapsed = true } = props
    this.state = { collapsed }

    this.handleExpand = this.handleExpand.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  static getDerivedStateFromProps (props, state) {
    const { collapsed: propCollapsed } = props
    const { collapsed: stateCollapsed } = state

    if (isNil(propCollapsed)) return { collapsed: stateCollapsed }

    if (propCollapsed !== stateCollapsed) return { collapsed: propCollapsed }

    return null
  }

  handleExpand () {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }))
  }

  handleClick (e) {
    const { onClick } = this.props
    if (isFunction(onClick)) {
      const data = {
        ...omit(this.props, ['items', 'onClick']),
        ...this.state
      }
      onClick(e, data)
    }
  }

  hasChildren () {
    const { items } = this.props
    return !isEmpty(items)
  }

  render () {
    const { title, content, items = [], onClick } = this.props
    const { collapsed } = this.state
    const hasChildren = this.hasChildren()

    const childrenStyle = collapsed
      ? [collapsedStyle, indented]
      : indented

    return (
      <div css={listItem}>
        {hasChildren && <TreeIcon collapsed={collapsed} onClick={this.handleExpand} />}
        <div css={indented} onClick={this.handleClick}>
          {content || title}
        </div>
        {items &&
          <Tree css={childrenStyle} items={items} onItemClick={onClick} />}
      </div>
    )
  }
}

const TreeIcon = ({ collapsed, onClick }) => {
  const iconName = collapsed
    ? 'keyboard_arrow_right'
    : 'keyboard_arrow_down'

  return <Icon css={icon} name={iconName} onClick={onClick} />
}

Tree.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func
}

Tree.defaultProps = {
  items: []
}

export default Tree
