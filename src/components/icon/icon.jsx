/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import { base, colored } from './style'

const Icon = (props) => {
  return (
    <i {...props} className='material-icons' css={[base, colored(props)]}>
      {props.name}
    </i>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
