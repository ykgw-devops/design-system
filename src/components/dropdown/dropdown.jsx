import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { cx } from '../../emotion'
import { base, item } from './style'

const Dropdown = ({
  options,
  ...rest
}) => (
  <Downshift {...rest}>
    {
      ({
        isOpen,
        openMenu,
        closeMenu
      }) => (
        <div className={cx(base)}>
          <div className={cx(item)} onClick={isOpen ? closeMenu : openMenu}>Dropdown</div>
          {
            isOpen
              ? options.map(option => <DropdownItem {...option} />)
              : null
          }
        </div>
      )
    }
  </Downshift>
)

const DropdownItem = ({ text, value, children }) => (
  <div
    className={cx(item)}
    data-value={value}>{text || children}</div>
)

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
}

Dropdown.defaultProps = {
  options: []
}

export default Dropdown
