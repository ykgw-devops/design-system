import React from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import { setDisplayName } from 'recompose'

import Group from './Group'
import Loader from '../loader/Loader'

import { base, kind, outline, pill, disabled, size, colorFromProps } from './Button.styles'

const Button = styled('button', {
  shouldForwardProp: isPropValid
})`
  ${base};
  ${props => kind(props)};
  ${props => size(props)};
  ${props => props.outline && outline(props)};
  ${props => props.pill && pill};
  ${props => props.disabled && disabled(props)};
`

const EnhancedButton = React.forwardRef((props, ref) => {
  const { loading, children, ...rest } = props

  return (
    <Button {...rest} ref={ref}>
      {loading && (
        <>
          <Loader
            color={colorFromProps(props)}
            size={14}
            thickness={2}
          />
          &nbsp;
        </>
      )}
      {children}
    </Button>
  )
})

EnhancedButton.Group = setDisplayName('Button.Group')(Group)

EnhancedButton.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger', 'success']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  pill: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

EnhancedButton.defaultProps = {
  type: 'button',
  kind: 'primary',
  size: 'medium',
  pill: false,
  outline: false,
  disabled: false,
  loading: false
}

export default EnhancedButton
