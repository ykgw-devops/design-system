/** @jsx jsx */
import React from 'react'
import { map, groupBy } from 'lodash'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'
import { jsx } from '@emotion/core'
import { base, menuWrapper, selectedItem as selectedItemStyle, grouped as groupedStyle, selected as selectedStyle } from './Dropdown.styles.jsx'
import DropdownItem from './Dropdown-item'

const Dropdown = ({ options, placeholder, content, ...rest }) => (
  <Downshift itemToString={itemToString} {...rest}>
    {props => {
      const { isOpen, toggleMenu, getItemProps, selectedItem } = props
      const selectedItemText = selectedItem ? selectedItem.text : placeholder
      const groupedOptions = groupBy(options, 'group')

      return (
        <div css={base} {...rest}>
          <SelectedItem
            content={content}
            selectedItemText={selectedItemText}
            toggleMenu={toggleMenu}
          />
          <div css={menuWrapper} style={{ display: isOpen ? 'block' : 'none' }}>
            {map(groupedOptions, (options, name) => (
              <Group
                key={`optiongroup_${name}`}
                options={options}
                name={name}
                getItemProps={getItemProps}
                selectedItem={selectedItem}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>
        </div>
      )
    }}
  </Downshift>
)

const SelectedItem = ({ content, selectedItemText, toggleMenu }) => {
  return content
    ? React.cloneElement(content, { onClick: toggleMenu })
    : (
      <div css={selectedItemStyle} onClick={toggleMenu}>
        <div css={selectedStyle}>{selectedItemText}</div>
      </div>
    )
}

const Group = ({ options, name, getItemProps, selectedItem, toggleMenu }) => {
  return (
    <React.Fragment>
      {
        name !== 'undefined' &&
        <span css={groupedStyle}>{name}</span>
      }
      {<div>
        {options.map(option => {
          const isActive = selectedItem
            ? itemToString(selectedItem) === itemToString(option)
            : false

          return (
            <Option
              key={itemToString(option)}
              active={isActive}
              option={option}
              getItemProps={getItemProps}
              selectedItem={selectedItem}
              toggleMenu={toggleMenu}
            />
          )
        })}
      </div>
      }
    </React.Fragment>
  )
}

const Option = ({ option, active, getItemProps, selectedItem, toggleMenu }) => {
  const { key, text, content, value, group, onClick, disabled } = option

  const uniqueKey = `select_option_${key || value || text}_group_${group}`
  const itemProps = getItemProps({ key: uniqueKey, item: option, disabled })

  const whenClicked = !disabled && onClick
    ? () => onClick({ toggleMenu }, selectedItem, group)
    : itemProps.onClick

  return (
    <Dropdown.Item
      {...itemProps}
      text={text || content}
      active={active}
      onClick={whenClicked}
    />
  )
}

function itemToString (item) {
  if (!item) return ''
  const { group, value, text } = item
  return `${group}-${value || text}`
}

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
