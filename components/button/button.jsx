import React from 'react'
import PropTypes from 'prop-types'

import { css, cx } from 'react-emotion'
import { base, kind, outline, pill, disabled, size } from './style'

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      className={cx(base, kind(props), outline(props), pill(props), disabled(props), size(props))}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  pill: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  kind: 'primary',
  size: 'medium'
}

export default Button
