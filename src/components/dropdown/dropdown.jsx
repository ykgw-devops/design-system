import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'
import { cx } from '../../emotion'
import { base, menuWrapper, item, selectedItem as selectedStyle } from './style'
import DropdownItem from './dropdown-item'

const Dropdown = ({ options, placeholder, ...rest }) => (
  <Downshift {...rest}>
    {({ isOpen, toggleMenu, getItemProps, selectedItem }) => {
      const selectedItemText = selectedItem || placeholder

      return (
        <div className={cx(base)}>
          {/* selected item */}
          <div className={cx(selectedStyle)} onClick={toggleMenu}>
            {selectedItemText}
          </div>
          {/* menu dropdown */}
          {isOpen && (
            <div className={menuWrapper}>
              {options.map(({ text, value }) => (
                <Dropdown.Item {...getItemProps({ key: value, item: text })} text={text} />
              ))}
            </div>
          )}
        </div>
      )
    }}
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
