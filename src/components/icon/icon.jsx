/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import { base, colored } from './style'

const Icon = (props) => {
  return (
    <i {...props} css={[base, colored(props)]} className={`material-icons ${props.className}`}>
      {props.name}
    </i>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
