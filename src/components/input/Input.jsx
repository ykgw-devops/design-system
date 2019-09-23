import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Group from './Group'
import { input, fluid as fluidStyle, basic as basicStyle, adornments } from './Input.styles'

const Input = styled.input`
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
