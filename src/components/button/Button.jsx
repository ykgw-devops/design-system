import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { setDisplayName } from 'recompose'

import Group from './Group'

import { base, kind, outline, pill, disabled, size } from './Button.styles'

const Button = styled.button`
  ${base};
  ${props => kind(props)};
  ${props => size(props)};
  ${props => kind(props)};
  ${props => props.outline && outline(props)};
  ${props => props.pill && pill};
  ${props => props.disabled && disabled(props)};
`

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
