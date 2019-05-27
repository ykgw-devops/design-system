/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { item } from './dropdown.styles.jsx'

const DropdownItem = (props) => (
  <div {...props} className={props.className} css={item}>
    {props.text || props.children}
  </div>
)

DropdownItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string
}

export default DropdownItem
