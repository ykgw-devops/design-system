/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { setDisplayName } from 'recompose'

import Group from './Group'

import { base, kind, outline, pill, disabled, size } from './Button.styles'

const Button = (props) => {
  const Button = styled.button([
    base,
    kind(props),
    size(props),
    props.outline && outline(props),
    props.pill && pill,
    props.disabled && disabled(props)
  ])

  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

Button.Group = setDisplayName('Button.Group')(Group)

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
