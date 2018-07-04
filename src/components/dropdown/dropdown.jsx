import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { setDisplayName } from 'recompose'
import { cx } from '../../emotion'
import { base, item } from './style'
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
          <div className={cx(item)} onClick={isOpen ? closeMenu : openMenu}>{placeholder}</div>
          {
            isOpen &&
            (
              children ||
              options.map(option => <Dropdown.Item {...option} />)
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
  placeholder: 'foobar'
}

export default Dropdown
