/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { item, disabled } from './Dropdown.styles.jsx'

const DropdownItem = (props) => (
  <div {...props} css={getStyles(props)} className={props.className} title={props.text} >
    {props.text || props.children}
  </div>
)

const getStyles = (props) => {
  return [
    item,
    props.disabled && disabled
  ]
}

DropdownItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string
}

export default DropdownItem
