/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Group from './Group'
import { base, input, fluidStyle } from './Input.styles'

const Container = styled.div`
  ${base};
  ${props => (
    props.fluid && fluidStyle
  )};
`

const Input = ({ adornments = [], fluid = false, ...rest }) => {
  return (
    <Container {...rest}>
      <input {...rest} css={input} />
    </Container>
  )
}

Input.Group = Group

Input.Adornment = styled.div`
  display: inline-block;
  padding: 0.25em 0.5em;
`

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
