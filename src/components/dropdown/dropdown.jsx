import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'
import { cx } from '../../emotion'
import { base, menuWrapper, item, selectedItem } from './style'
import DropdownItem from './dropdown-item'

const Dropdown = ({
  options,
  placeholder,
  children,
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
          <div className={cx(selectedItem)} onClick={isOpen ? closeMenu : openMenu}>
            {placeholder}
          </div>
          {
            isOpen &&
            (
              <div className={menuWrapper}>
                {children || options.map(option => <Dropdown.Item {...option} />)}
              </div>
            )
          }
        </div>
      )
    }
  </Downshift>
)

Dropdown.Item = setDisplayName('Dropdown.Item')(DropdownItem)

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string
}

Dropdown.defaultProps = {
  options: [],
  placeholder: 'Select Item'
}

export default Dropdown
