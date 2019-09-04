import React from 'react'
import PropTypes from 'prop-types'

import { item, disabled, activeItem } from './Dropdown.styles.jsx'

const DropdownItem = (props) => {
  const { text, active, onClick, ...rest } = props

  return (
    <div onClick={onClick} css={getStyles(props)} title={text} {...rest}>
      {text || props.children}
    </div>
  )
}

const getStyles = (props) => {
  return [
    item,
    props.disabled && disabled,
    props.active && activeItem
  ]
}

DropdownItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string
}

export default DropdownItem
