/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { omitBy, isBoolean } from 'lodash'

import { base, kind, outline, pill, disabled, size } from './button.styles'

const Button = (props) => {
  return props.href ? asAnchor(props) : asButton(props)
}

function asButton (props) {
  const { children, disabled } = props

  const rest = omitBy(props, isBoolean)
  return (
    <button disabled={disabled} {...rest} css={getStyle(props)}>
      {children}
    </button>
  )
}

function asAnchor (props) {
  const { children, disabled, href } = props

  const rest = omitBy(props, isBoolean)
  return (
    <a href={disabled ? undefined : href} disabled={disabled} {...rest} css={getStyle(props)}>
      {children}
    </a>
  )
}

function getStyle (props) {
  return [
    base,
    kind(props),
    size(props),
    props.outline && outline(props),
    props.pill && pill,
    props.disabled && disabled(props)
  ]
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
