import React from 'react'
import PropTypes from 'prop-types'

import { cx } from '../../emotion'
import { base, kind, outline, pill, disabled, size } from './style'

const Button = (props) => {
  return props.href ? asAnchor(props) : asButton(props)
}

function asButton (props) {
  const { children, disabled, ...rest } = props
  return (
    <button disabled={disabled} className={className(props)} {...rest}>
      {children}
    </button>
  )
}

function asAnchor (props) {
  const { children, disabled, href, ...rest } = props
  return (
    <a href={disabled ? undefined : href} disabled={disabled} className={className(props)} {...rest}>
      {children}
    </a>
  )
}

function className (props) {
  return cx(base, kind(props), outline(props), pill(props), disabled(props), size(props), props.className)
}

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger', 'success']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
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
