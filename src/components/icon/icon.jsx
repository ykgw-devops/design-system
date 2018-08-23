import React from 'react'
import PropTypes from 'prop-types'

import { base, colored } from './style'
import { cx } from '../../emotion'

const Icon = (props) => {
  return (
    <i {...props} className={cx('material-icons', base, colored(props), props.className)}>
      {props.name}
    </i>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
