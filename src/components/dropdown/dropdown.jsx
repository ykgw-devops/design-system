import React from 'react'
import { find, omit } from 'lodash'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'
import { jsx } from '@emotion/core'
import { base, menuWrapper, selectedItem as selectedStyle, activeItem as activeItemStyle } from './style'
import DropdownItem from './dropdown-item'

const Dropdown = ({ options, placeholder, content, className, ...rest }) => (
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
          const { key, text, content, value, onClick } = option
          const isActive = selectedItem === value
          const itemProps = getItemProps({ key: key || value, item: value })

          const whenClicked = onClick
            ? () => onClick({ toggleMenu }, omit(option, ['onClick']))
            : itemProps.onClick

          return (
            <Dropdown.Item {...itemProps} text={text || content} className={isActive && activeItemStyle} onClick={whenClicked} />
          )
        })
      )

      const renderContent = content
        ? React.cloneElement(content, { onClick: toggleMenu })
        : (<div className={cx(selectedStyle)} onClick={toggleMenu}>
          {selectedItemText}
        </div>)

      return (
        <div className={cx(base, className)}>
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
