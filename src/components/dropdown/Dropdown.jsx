/** @jsx jsx */
import React from 'react'
import { find, omit, map, groupBy } from 'lodash'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'
import { jsx } from '@emotion/core'
import { base, menuWrapper, selectedItem as selectedItemStyle, activeItem as activeItemStyle, grouped as groupedStyle, selected as selectedStyle, groupWrapper } from './Dropdown.styles.jsx'
import DropdownItem from './Dropdown-item'

const Dropdown = ({ options, placeholder, content, ...rest }) => (
  <Downshift {...rest}>
    {props => {
      const { isOpen, toggleMenu, getItemProps, selectedItem } = props

      const findItem = find(options, { value: selectedItem })
      const selectedItemText = findItem
        ? findItem.text
        : placeholder

      return (
        <div>
          <div css={base}>
            <SelectedItem
              content={content}
              selectedItemText={selectedItemText}
              toggleMenu={toggleMenu}
            />
            <div css={menuWrapper} style={{ display: isOpen ? 'block' : 'none' }}>
              <OptionGroups
                options={options}
                getItemProps={getItemProps}
                selectedItem={selectedItem}
                toggleMenu={toggleMenu}
              />
            </div>
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

const OptionGroups = ({ options, getItemProps, selectedItem, toggleMenu }) => {
  const groupedOptions = groupBy(options, 'group')

  return map(groupedOptions, (optiongroup, groupname) => (
    <React.Fragment key={`optiongroup_${groupname}`}>
      {
        groupname !== 'undefined' &&
        <span css={groupedStyle}>{groupname}</span>
      }
      {<div css={groupWrapper}>
          <OptionItems
            options={optiongroup}
            getItemProps={getItemProps}
            selectedItem={selectedItem}
            toggleMenu={toggleMenu}
            groupname={groupname}
          />
        </div>
      }
    </React.Fragment>
  ))
}

const OptionItems = ({ options, groupname, getItemProps, selectedItem, toggleMenu }) => (
  options.map(option => {
    const { key, text, content, value, onClick, disabled } = option

    const isActive = selectedItem === value
    const itemProps = getItemProps({ key: key || value, item: value, disabled })

    const whenClicked = !disabled && onClick
      ? () => onClick({ toggleMenu }, omit(option, ['onClick']), groupname)
      : itemProps.onClick

    return (
      <Dropdown.Item
        {...itemProps}
        text={text || content}
        css={isActive && activeItemStyle}
        onClick={whenClicked}
      />
    )
  })
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
