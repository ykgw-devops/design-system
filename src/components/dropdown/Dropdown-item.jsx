/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { item } from './Dropdown.styles.jsx'

const DropdownItem = (props) => (
  <div {...props} css={item} className={props.className}>
    {props.text || props.children}
  </div>
)

DropdownItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string
}

export default DropdownItem
