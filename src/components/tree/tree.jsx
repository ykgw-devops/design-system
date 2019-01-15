import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty, isFunction, omit, noop } from 'lodash'

import { cx } from '../../emotion'
import { base, collapsed as collapsedStyle, listItem, indented, withChildren } from './tree.styles.jsx'

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
  }

  onTreeClick (e) {
    const hasChildren = this.hasChildren()
    hasChildren
      ? this.toggleCollapse(() => this.reportClick(e))
      : this.reportClick(e)
  }

  toggleCollapse (cb = noop) {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }), cb)
  }

  reportClick (e) {
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
    const { title, items = [], onClick } = this.props
    const { collapsed } = this.state
    const hasChildren = this.hasChildren()

    const treeStyle = cx(
      listItem,
      hasChildren && withChildren({ collapsed })
    )

    const childrenStyle = collapsed
      ? cx(collapsedStyle, indented)
      : indented

    return (
      <div className={treeStyle}>
        <div className={indented} onClick={(e) => this.onTreeClick(e)}>
          {title}
        </div>
        {items &&
          <Tree className={childrenStyle} items={items} onItemClick={onClick} />
        }
      </div>
    )
  }
}

Tree.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func
}

Tree.defaultProps = {
  items: []
}

export default Tree
