import React from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'

import Group from './Group'
import { input, fluid as fluidStyle, basic as basicStyle, adornments } from './Input.styles'

const handleFocus = e => e.target.select()

const ValidInput = styled('input', {
  shouldForwardProp: isPropValid
})``

const BaseInput = props => <ValidInput {...props} onFocus={props.focusSelect && handleFocus} />

const Input = styled(BaseInput)`
  ${input};
  ${props => props.fluid && fluidStyle};
  ${props => props.basic && basicStyle};
`

const Adornment = styled.span(adornments)

Input.Adornment = Adornment
Input.Group = Group

Input.propTypes = {
  onChange: PropTypes.func,
  adornments: PropTypes.array,
  fluid: PropTypes.bool
}

Input.defaultProps = {
  onChange: () => undefined,
  adornments: [],
  fluid: false
}

export default Input
