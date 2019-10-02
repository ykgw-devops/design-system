/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { isString } from 'lodash'

import { item, disabled, activeItem } from './Dropdown.styles.jsx'

const DropdownItem = (props) => {
  const { text, active, onClick, ...rest } = props

  return (
    <div onClick={onClick} css={getStyles(props)} title={isString(text) ? text : undefined} {...rest}>
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
