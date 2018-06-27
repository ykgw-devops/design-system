import React from 'react'
import PropTypes from 'prop-types'
import { times } from 'lodash'

import style from './style.jsx'
import { cx } from 'emotion'

const Pagination = ({ name, count, activeIndex = 0 }) => {
  return (
    <div className={cx(style.base)}>
      {previous(activeIndex)}
      {times(count, i => item(i, activeIndex))}
      {next(count, activeIndex)}
    </div>
  )
}

const item = (index, activeIndex) => {
  const activeStyle = (index === activeIndex) && style.activeItem
  return (
    <a href="" key={index} className={cx(style.item, activeStyle)}>
      {index + 1}
    </a>
  )
}

const previous = activeIndex => {
  const disabled = (activeIndex === 0) && style.disabled

  return (
    <a href="" className={cx(style.firstItem, disabled)}>
      Previous
    </a>
  )
}

const next = (count, activeIndex) => {
  const disabled = (activeIndex === (count - 1)) && style.disabled

  return (
    <a href="" className={cx(style.lastItem, disabled)}>
      Next
    </a>
  )
}

Pagination.propTypes = {
  count: PropTypes.number
}

export default Pagination
