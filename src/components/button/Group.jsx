/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { base } from './Group.styles'

const ButtonGroup = ({ children, fluid, compact, equalWidth, ...rest }) => (
  <div {...rest} css={base({ fluid, compact, equalWidth })}>
    {children}
  </div>
)

ButtonGroup.propTypes = {
  equalWidth: PropTypes.bool,
  fluid: PropTypes.bool,
  compact: PropTypes.bool
}

export default ButtonGroup
