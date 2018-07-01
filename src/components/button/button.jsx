import React from 'react'
import PropTypes from 'prop-types'

import { cx } from 'react-emotion'
import { base, kind, outline, pill, disabled, size } from './style'

const Button = props => (
    <button disabled={props.disabled} className={getStyle(props)}>
      {props.children}
    </button>
  )

function getStyle (props) {
  return cx(base, kind(props), outline(props), pill(props), disabled(props), size(props))
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
  size: 'medium',
  pill: false,
  outline: false,
  disabled: false
}

export default Button
