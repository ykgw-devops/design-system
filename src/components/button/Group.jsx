import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { base } from './Group.styles'

const Wrapper = styled.div`
  ${props => base(props)};
`

const ButtonGroup = (props) => {
  const { children, ...rest } = props

  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  )
}

ButtonGroup.propTypes = {
  equalWidth: PropTypes.bool,
  fluid: PropTypes.bool,
  compact: PropTypes.bool
}

export default ButtonGroup
