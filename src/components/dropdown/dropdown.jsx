/** @jsx jsx */
import React from 'react'
import { find, omit, map } from 'lodash'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'
import { jsx } from '@emotion/core'
import { base, menuWrapper, selectedItem as selectedStyle, activeItem as activeItemStyle, grouped as groupedStyle } from './dropdown.styles.jsx'
import DropdownItem from './dropdown-item'

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
          const { key, text, content, value, onClick } = option
          const isActive = selectedItem === value
          const itemProps = getItemProps({ key: key || value, item: value })

          const whenClicked = onClick
            ? () => onClick({ toggleMenu }, omit(option, ['onClick']))
            : itemProps.onClick

          return (
            <Dropdown.Item {...itemProps} text={text || content} css={isActive && activeItemStyle} onClick={whenClicked} />
          )
        })
      )

      const optionsToGroups = (options) => (
        map(options, (optiongroup, key) => (
          <React.Fragment key={key}>
            {<span css={groupedStyle}>{key}</span>}
            {optionsToItems(optiongroup)}
          </React.Fragment>
        ))
      )

      const renderContent = content
        ? React.cloneElement(content, { onClick: toggleMenu })
        : (<div css={selectedStyle} onClick={toggleMenu}>
          {selectedItemText}
        </div>)

      return (
        <div>
          <div css={base}>
            {/* selected item */}
            {renderContent}

            {/* menu dropdown */}
            {
              <div css={menuWrapper} style={{ display: isOpen ? 'block' : 'none' }}>
                {
                  Array.isArray(options)
                    ? optionsToItems(options)
                    : optionsToGroups(options)
                }
              </div>
            }
          </div>
        </div>
      )
    }}
  </Downshift>
)

Dropdown.Item = setDisplayName('Dropdown.Item')(DropdownItem)

Dropdown.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object))
  ]),
  placeholder: PropTypes.string
}

Dropdown.defaultProps = {
  options: [],
  placeholder: 'Select Item'
}

export default Dropdown
