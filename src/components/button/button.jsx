import React from 'react'
import PropTypes from 'prop-types'
import { omitBy, isBoolean } from 'lodash'

import { cx } from '../../emotion'
import { base, kind, outline, pill, disabled, size } from './button.styles'

const Button = (props) => {
  return props.href ? asAnchor(props) : asButton(props)
}

function asButton (props) {
  const { children, disabled } = props

  const rest = omitBy(props, isBoolean)
  return (
    <button disabled={disabled} {...rest} className={className(props)}>
      {children}
    </button>
  )
}

function asAnchor (props) {
  const { children, disabled, href } = props

  const rest = omitBy(props, isBoolean)
  return (
    <a href={disabled ? undefined : href} disabled={disabled} {...rest} className={className(props)}>
      {children}
    </a>
  )
}

function className (props) {
  return cx(base, kind(props), size(props), {
    [outline(props)]: props.outline,
    [pill]: props.pill,
    [disabled(props)]: props.disabled
  }, props.className)
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
