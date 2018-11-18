import React, { useState } from 'react'
import { isEmpty, noop } from 'lodash'

import { cx } from '../../emotion'
import { base, collapsed, listItem, withChildren } from './tree.styles.jsx'

const Tree = (props) => {
  const { items = [] } = props
  if (isEmpty(items)) return null

  /**
   *  simple recursion to render a tree
   *    within a tree
   *      within a tree
   *        within a tree
   */
  return (
    <ul className={cx(base)}>
      {items.map(item => {
        const { title, items = [], key, onClick } = item
        const hasChildren = items.length > 0
        const [shouldCollapse, setCollapsed] = useState(item.collapsed)

        function toggleCollapse () {
          setCollapsed(!shouldCollapse)
        }

        const subTreeClickHandler = hasChildren
          ? onClick || toggleCollapse
          : noop

        const treeStyle = cx(
          listItem,
          hasChildren && withChildren({ collapsed: shouldCollapse }),
          shouldCollapse && collapsed
        )

        // unfortunately react-spring does not allow us to animate the subtree
        // with hooks (yet)
        // ref: https://github.com/drcmda/react-spring/issues/302
        return (
          <div className={treeStyle} key={key || title}>
            <div onClick={subTreeClickHandler}>
              {title}
            </div>
            {items &&
              <Tree items={items} />
            }
          </div>
        )
      })}
    </ul>
  )
}

export default Tree
