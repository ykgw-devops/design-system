/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import { isEmpty, noop } from 'lodash'

import { base, collapsed, listItem, indented, withChildren } from './tree.styles.jsx'

const Tree = (props) => {
  const { items = [], className } = props
  if (isEmpty(items)) return null

  /**
   *  simple recursion to render a tree
   *    within a tree
   *      within a tree
   *        within a tree
   */
  return (
    <ul className={className} css={[base]}>
      {items.map(item => {
        const { title, items = [], key, onClick } = item
        const hasChildren = items.length > 0
        const [shouldCollapse, setCollapsed] = useState(item.collapsed)

        function toggleCollapse () {
          setCollapsed(!shouldCollapse)
        }

        const onTreeClick = hasChildren
          ? onClick || toggleCollapse
          : noop

        const treeStyle = [
          listItem,
          hasChildren && withChildren({ collapsed: shouldCollapse }),
          shouldCollapse && collapsed
        ]

        // unfortunately react-spring does not allow us to animate the subtree
        // with hooks (yet)
        // ref: https://github.com/drcmda/react-spring/issues/302
        return (
          <div css={treeStyle} key={key || title}>
            <div css={indented} onClick={onTreeClick}>
              {title}
            </div>
            {items &&
              <Tree items={items} css={indented} />
            }
          </div>
        )
      })}
    </ul>
  )
}

export default Tree
