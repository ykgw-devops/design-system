import React from 'react'
import { find } from 'lodash'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName, withProps } from 'recompose'
import { cx } from '../../emotion'
import { base, menuWrapper, item, selectedItem as selectedStyle, activeItem as activeItemStyle } from './style'
import DropdownItem from './dropdown-item'
import { PropsTable } from '../../../node_modules/docz';

const Dropdown = ({ options, placeholder, content, ...rest }) => (
  <Downshift {...rest}>
    {props => {
      const { isOpen, toggleMenu, getItemProps, selectedItem } = props

      const findItem = find(options, { value: selectedItem })
      const selectedItemText = findItem
        ? findItem.text
        : placeholder

      // transform options props to <Menu.Item>s
      const optionsToItems = options => (
        options.map(option => {
          const { text, value, onClick } = option
          const isActive = selectedItem === value
          const itemProps = getItemProps({ key: value, item: value })

          const whenClicked = onClick
            ? () => onClick({ toggleMenu })
            : itemProps.onClick

          return (
            <Dropdown.Item {...itemProps} text={text} className={isActive && activeItemStyle} onClick={whenClicked}  />
          )
        })
      )

      const renderContent = content
        ? React.cloneElement(content, { onClick: toggleMenu })
        : (<div className={cx(selectedStyle)} onClick={toggleMenu}>
            {selectedItemText}
          </div>)

      return (
        <div className={cx(base)}>
          {/* selected item */}
          {renderContent}

          {/* menu dropdown */}
          {
            <div className={menuWrapper} style={{ display: isOpen ? 'block' : 'none' }}>
              {optionsToItems(options)}
            </div>
          }
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
