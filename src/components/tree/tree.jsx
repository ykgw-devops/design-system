import React from 'react'

import { cx } from '../../emotion'
import { base, withChildren } from './tree.styles.jsx'

const Tree = (props) => {
  const { items = [], key, title } = props

  // simple recursion to render a tree within a tree within a tree within a tree
  return (
    <ul key={key || title} className={cx(base)}>
      {items.map(item => {
        const { title, items = [], key } = item
        const hasChildren = items.length > 0

        return (
          <li className={cx(hasChildren && withChildren)} key={key || title}>
            {title}
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
