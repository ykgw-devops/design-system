import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '../../emotion'
import { item } from './style'

const DropdownItem = (props) => (
  <div {...props} className={item}>
    {props.text || props.children}
  </div>
)

DropdownItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string
}

export default DropdownItem
