import React from 'react'
import PropTypes from 'prop-types'

import { base } from './style'
import { cx } from '../../emotion'

const Icon = (props) => {
  return (
    <i {...props} className={cx(base, 'material-icons', props.className)}>
      {props.name}
    </i>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
