/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { includes, times } from 'lodash'

import style from './Pagination.styles.jsx'
import colors, { carbon } from '../../Colors'

interface IPaginationProps {
  count: number;
  initialIndex: number;
  relative?: boolean;
  onIndexChanged?: (index: number) => void;
}

function Pagination (props: IPaginationProps) {
  const { initialIndex, count, relative, onIndexChanged } = props
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  function nextPage (e) {
    setIndex(e, activeIndex + 1)
  }

  function previousPage (e) {
    setIndex(e, activeIndex - 1)
  }

  function setIndex (e, index: number) {
    noop(e)

    onIndexChanged(index)
    setActiveIndex(index)
  }

  return (
    <nav css={style.base} aria-label='pagination'>
      {previous(activeIndex, previousPage)}
      {
        relative
          ? pageIndicator(activeIndex, activeIndex + 1)
          : renderPaginationItems(count, activeIndex, setIndex)
      }
      {next(count, activeIndex, nextPage)}
    </nav>
  )
}

const noop = (e) => {
  e && e.preventDefault()
}

function renderPaginationItems (count: number, activeIndex: number, setIndex) {
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
  return (index: number, number: number, options = { active: false, ellipsis: false }) => {
    const disabled = options.ellipsis
    const active = options.active

    const updateFn = disabled ? noop : setIndex

    return (
      <a
        onClick={e => updateFn(e, index)}
        key={index}
        css={[style.item, active && style.activeItem, disabled && style.disabled]}
        aria-current={active ? 'page' : null}
        aria-disabled={disabled ? 'true' : null}
        role='button'
      >
        {options.ellipsis ? '…' : number}
      </a>
    )
  }
}

function getPaginationType (activeIndex: number, count: number) {
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

const previous = (activeIndex: number, previousPage) => {
  const disabled = (activeIndex === 0)
  const updateFn = disabled ? noop : previousPage

  return (
    <a
      role='button'
      aria-label='previous'
      aria-disabled={disabled}
      onClick={updateFn}
      css={[style.firstItem, disabled && style.disabled]}
    >
      Previous
    </a>
  )
}

const next = (count : number, activeIndex: number, nextPage) => {
  const disabled = (activeIndex === (count - 1))
  const updateFn = disabled ? noop : nextPage

  return (
    <a
      role='button'
      aria-label='next'
      aria-disabled={disabled}
      onClick={updateFn}
      css={[style.lastItem, disabled && style.disabled]}
    >
      Next
    </a>
  )
}

const pageIndicator = (index: number, number: number) => (
  <a
    key={index}
    role='button'
    css={[style.item, style.pageIndicator]}
    style={{ color: colors.withWeight(carbon, 400) }}
  >
    Page {number}
  </a>
)

Pagination.defaultProps = {
  count: 0,
  initialIndex: 0,
  relative: false,
  onIndexChanged: () => {}
}

export default Pagination
