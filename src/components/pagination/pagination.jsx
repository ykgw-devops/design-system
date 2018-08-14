import React from 'react'
import PropTypes from 'prop-types'
import { includes, times } from 'lodash'

import style from './style.jsx'
import { cx } from '../../emotion'

const Pagination = ({ count = 0, activeIndex = 0 }) => (
  <div className={cx(style.base)}>
    {previous(activeIndex)}
    {renderPaginationItems(count, activeIndex)}
    {next(count, activeIndex)}
  </div>
)

function renderPaginationItems (count, activeIndex) {
  const { visible, ellipsis } = getPaginationType(activeIndex, count)

  return times(count, index => {
    const active = index === activeIndex

    if (count <= 9) return item(index, index + 1, { active })

    if (includes(visible, index)) return item(index, index + 1, { active })
    if (includes(ellipsis, index)) return item(index, '', { ellipsis: true })

    return null
  })
}

/**
 * head: 6 left and 2 right (+ 1 ellipsis) = 9
 * tail: 2 left and 6 right (+ 1 ellipsis) = 9
 * middle: 2 left 3 middle and 2 right (+ 2 ellipsis) = 9
 */
function range (size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}

const item = (key, number, options = { active: false, ellipsis: false }) => {
  const disabled = options.ellipsis && style.disabled
  const active = options.active && style.activeItem

  const href = disabled ? undefined : ''

  return (
    <a href={href} key={key} className={cx(style.item, active, disabled)}>
      {options.ellipsis ? '…' : number}
    </a>
  )
}

function getPaginationType (activeIndex, count) {
  const HEAD_TAIL_SIZE = 6

  const isHead = activeIndex <= HEAD_TAIL_SIZE
  const isTail = activeIndex >= count - HEAD_TAIL_SIZE

  const isMoving = !isHead && !isTail

  if (isMoving) {
    return {
      visible: [0, 1, activeIndex - 1, activeIndex, activeIndex + 1, count - 1, count - 2],
      ellipsis: [2, count - 3]
    }
  }

  if (isHead) {
    return {
      visible: range(HEAD_TAIL_SIZE).concat(count - 2, count - 1),
      ellipsis: [HEAD_TAIL_SIZE]
    }
  }

  if (isTail) {
    return {
      visible: range(HEAD_TAIL_SIZE, count - HEAD_TAIL_SIZE).concat(0, 1),
      ellipsis: [2]
    }
  }
}

const previous = activeIndex => {
  const disabled = (activeIndex === 0) && style.disabled

  return (
    <a href='' className={cx(style.firstItem, disabled)}>
      Previous
    </a>
  )
}

const next = (count, activeIndex) => {
  const disabled = (activeIndex === (count - 1)) && style.disabled

  return (
    <a href='' className={cx(style.lastItem, disabled)}>
      Next
    </a>
  )
}

Pagination.propTypes = {
  count: PropTypes.number,
  activeIndex: PropTypes.number
}

Pagination.defaultProps = {
  count: 0,
  activeIndex: 0
}

export default Pagination
