import React from 'react'
import { noop } from 'lodash'

import { cx } from '../../emotion'
import { base, listItem, withChildren } from './tree.styles.jsx'

const Tree = (props) => {
  const { items = [] } = props
  if (!items || items.length === 0) return null

  // simple recursion to render a tree within a tree within a tree within a tree
  return (
    <ul className={cx(base)}>
      {items.map(item => {
        const { title, items = [], key, onClick } = item
        const hasChildren = items.length > 0

        return (
          <li className={cx(listItem)} key={key || title}>
            <div onClick={onClick || noop} className={cx(hasChildren && withChildren)}>
              {title}
            </div>
            {items &&
              <Tree items={items} />
            }
          </li>
        )
      })}
    </ul>
  )
}

export default Tree
