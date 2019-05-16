import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty, isFunction, omit } from 'lodash'

import Icon from '../icon/icon'

import { cx } from '../../emotion'
import { base, collapsed as collapsedStyle, listItem, indented, icon } from './tree.styles.jsx'

const Tree = (props) => {
  const { className, items, onItemClick } = props
  if (isEmpty(items)) return null

  /**
   *  simple recursion to render a tree
   *    within a tree
   *      within a tree
   *        within a tree
   */
  return (
    <div className={cx(base, className)}>
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
      ? cx(collapsedStyle, indented)
      : indented

    return (
      <div className={listItem}>
        {hasChildren && <TreeIcon collapsed={collapsed} onClick={this.handleExpand} />}
        <div className={indented} onClick={this.handleClick}>
          {content || title}
        </div>
        {items &&
          <Tree className={childrenStyle} items={items} onItemClick={onClick} />
        }
      </div>
    )
  }
}

const TreeIcon = ({ collapsed, onClick }) => {
  const iconName = collapsed
    ? 'keyboard_arrow_right'
    : 'keyboard_arrow_down'

  return <Icon className={icon} name={iconName} onClick={onClick} />
}

Tree.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func
}

Tree.defaultProps = {
  items: []
}

export default Tree
