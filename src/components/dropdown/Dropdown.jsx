/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { map, groupBy } from 'lodash'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'

import { base, fluid, compact, menuWrapper, selectedItem as selectedItemStyle, grouped as groupedStyle, selected as selectedStyle } from './Dropdown.styles.jsx'
import DropdownItem from './Dropdown-item'

const Dropdown = ({ options, placeholder, content, compact, fluid, selectedItem = {}, ...rest }) => (
  <Downshift itemToString={itemToString}>
    {props => {
      const { isOpen, toggleMenu, getItemProps } = props
      const groupedOptions = groupBy(options, 'group')

      return (
        <div {...rest}>
          <div css={getStyle({ compact, fluid })}>
            <SelectedItem
              placeholder={placeholder}
              content={content}
              text={selectedItem && selectedItem.text}
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
        </div>
      )
    }}
  </Downshift>
)

const SelectedItem = ({ content, text, placeholder, toggleMenu }) => {
  return content
    ? React.cloneElement(content, { onClick: toggleMenu })
    : (
      <div css={selectedItemStyle} onClick={toggleMenu}>
        <div css={selectedStyle(text)}>{text || placeholder}</div>
      </div>
    )
}

const Group = ({ options, name, getItemProps, selectedItem, toggleMenu }) => {
  return (
    <>
      {
        name !== 'undefined' &&
          <span css={groupedStyle}>{name}</span>
      }
      {
        <div>
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
    </>
  )
}

const Option = ({ option, active, getItemProps, selectedItem, toggleMenu }) => {
  const { key, text, content, group, onClick, disabled } = option

  const uniqueKey = `select_option_${key || text}_group_${group}`
  const itemProps = getItemProps({ key: uniqueKey, item: option, disabled })

  const whenClicked = !disabled && onClick
    ? () => onClick({ toggleMenu }, option, group)
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
  const { group, text, key } = item
  return key || `${group}-${text}`
}

function getStyle (props) {
  return [
    base,
    props.compact && compact,
    props.fluid && fluid
  ]
}

Dropdown.Item = setDisplayName('Dropdown.Item')(DropdownItem)

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  selectedItem: PropTypes.object,
  compact: PropTypes.bool,
  fluid: PropTypes.bool
}

Dropdown.defaultProps = {
  options: [],
  placeholder: 'Select Item'
}

export default Dropdown
