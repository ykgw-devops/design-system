import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '../../emotion'
import { item } from './style'

const DropdownItem = ({ text, value, children }) => (
  <div
    className={cx(item)}
    data-value={value}>{text || children}</div>
)

DropdownItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string
}

export default DropdownItem
