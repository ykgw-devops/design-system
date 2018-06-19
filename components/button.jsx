import React from 'react'
import PropTypes from 'prop-types'

import { css, cx } from 'react-emotion'
import { base, kind, shape } from './style'

const Button = props => {
  return (
    <button className={cx(base, shape(props), kind(props))}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger']),
  shape: PropTypes.oneOf(['pill'])
}

export default Button
