import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { includes, times } from 'lodash'

import style from './Pagination.styles.jsx'

function Pagination (props) {
  const { initialIndex, count, onIndexChanged } = props
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  function nextPage (e) {
    setIndex(e, activeIndex + 1)
  }

  function previousPage (e) {
    setIndex(e, activeIndex - 1)
  }

  function setIndex (e, index) {
    noop(e)

    onIndexChanged(index)
    setActiveIndex(index)
  }

  return (
    <div css={style.base}>
      {previous(activeIndex, previousPage)}
      {renderPaginationItems(count, activeIndex, setIndex)}
      {next(count, activeIndex, nextPage)}
    </div>
  )
}

const noop = (e) => {
  e && e.preventDefault()
}

function renderPaginationItems (count, activeIndex, setIndex) {
  const { visible, ellipsis } = getPaginationType(activeIndex, count)

  const itemWithUpdateFn = item(setIndex)

  return times(count, index => {
    const active = index === activeIndex

    if (count <= 9) return itemWithUpdateFn(index, index + 1, { active })

    if (includes(visible, index)) return itemWithUpdateFn(index, index + 1, { active })
    if (includes(ellipsis, index)) return itemWithUpdateFn(index, '', { ellipsis: true })

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

const item = setIndex => {
  return (index, number, options = { active: false, ellipsis: false }) => {
    const disabled = options.ellipsis && style.disabled
    const active = options.active && style.activeItem

    const updateFn = disabled ? noop : setIndex

    return (
      <a onClick={e => updateFn(e, index)} key={index} css={[style.item, active, disabled]}>
        {options.ellipsis ? '…' : number}
      </a>
    )
  }
}

function getPaginationType (activeIndex, count) {
  const HEAD_TAIL_SIZE = 6

  const isHead = activeIndex < HEAD_TAIL_SIZE
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

const previous = (activeIndex, previousPage) => {
  const disabled = (activeIndex === 0) && style.disabled
  const updateFn = disabled ? noop : previousPage

  return (
    <a onClick={updateFn} css={[style.firstItem, disabled]}>
      Previous
    </a>
  )
}

const next = (count, activeIndex, nextPage) => {
  const disabled = (activeIndex === (count - 1)) && style.disabled
  const updateFn = disabled ? noop : nextPage

  return (
    <a onClick={updateFn} css={[style.lastItem, disabled]}>
      Next
    </a>
  )
}

Pagination.propTypes = {
  count: PropTypes.number,
  initialIndex: PropTypes.number,
  onIndexChanged: PropTypes.func
}

Pagination.defaultProps = {
  count: 0,
  initialIndex: 0,
  onIndexChanged: () => {}
}

export default Pagination
