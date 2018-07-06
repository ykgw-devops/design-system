import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName, withProps } from 'recompose'
import { cx } from '../../emotion'
import { base, menuWrapper, item, selectedItem as selectedStyle, activeItem as activeItemStyle } from './style'
import DropdownItem from './dropdown-item'

const Dropdown = ({ options, placeholder, ...rest }) => (
  <Downshift {...rest}>
    {({ isOpen, toggleMenu, getItemProps, selectedItem }) => {
      const selectedItemText = selectedItem || placeholder

      // transform options props to <Menu.Item>s
      const optionsToItems = options => (
        options.map(({ text, value }) => {
          const isActive = selectedItem === value
          const itemProps = getItemProps({ key: value, item: text })

          return (
            <Dropdown.Item {...itemProps} text={text} className={isActive && activeItemStyle} />
          )
        })
      )

      return (
        <div className={cx(base)}>
          {/* selected item */}
          <div className={cx(selectedStyle)} onClick={toggleMenu}>
            {selectedItemText}
          </div>
          {/* menu dropdown */}
          {isOpen && (
            <div className={menuWrapper}>
              {optionsToItems(options)}
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
