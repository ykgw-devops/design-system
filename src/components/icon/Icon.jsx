import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { withProps } from 'recompose'

import { base, colored, circular, filled } from './Style'

const Icon = styled.i(props => [
  base,
  colored(props),
  props.circular && circular(props),
  (props.circular && props.filled) && filled(props)
])

const iconProps = props => ({
  children: props.name,
  className: `material-icons ${props.className || ''}`
})

Icon.propTypes = {
  name: PropTypes.string,
  circular: PropTypes.bool,
  filled: PropTypes.bool
}

export default withProps(iconProps)(Icon)
